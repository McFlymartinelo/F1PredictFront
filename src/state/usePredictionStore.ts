import { create } from "zustand";
import { Prediction } from "@types/index";
import { ApiService } from "@services/api";

interface PredictionState {
  predictions: Record<string, Prediction>; // key: grandPrixId
  saving: boolean;
  setLocalPrediction: (gpId: string, partial: Partial<Prediction>) => void;
  savePrediction: (gpId: string) => Promise<void>;
  loadUserPredictions: (userId: string) => Promise<void>;
}

export const usePredictionStore = create<PredictionState>((set, get) => ({
  predictions: {},
  saving: false,
  setLocalPrediction: (gpId, partial) => {
    const existing = get().predictions[gpId] || {
      grandPrixId: gpId,
      pole: null,
      podium: [],
      surprise: null,
      fastestLap: null,
      lockedPole: false,
      lockedRace: false,
      userId: ""
    };
    set({
      predictions: {
        ...get().predictions,
        [gpId]: { ...existing, ...partial }
      }
    });
  },
  savePrediction: async (gpId) => {
    const pred = get().predictions[gpId];
    if (!pred) return;
    set({ saving: true });
    try {
      const saved = await ApiService.postPrediction(pred);
      set({
        predictions: {
          ...get().predictions,
          [gpId]: { ...saved }
        },
        saving: false
      });
    } catch (e) {
      set({ saving: false });
      throw e;
    }
  },
  loadUserPredictions: async (userId: string) => {
    const data = await ApiService.getPredictions(userId);
    const map: Record<string, Prediction> = {};
    data.forEach((p: Prediction) => { map[p.grandPrixId] = p; });
    set({ predictions: map });
  }
}));