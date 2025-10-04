import { create } from "zustand";
import { User } from "firebase/auth";
import * as SecureStore from "expo-secure-store";
import { ApiService } from "@services/api";

interface AuthState {
  firebaseUser: User | null;
  jwt: string | null;
  loading: boolean;
  setFirebaseUser: (u: User | null) => void;
  setJwt: (token: string | null) => Promise<void>;
  authenticateBackend: (firebaseToken: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  firebaseUser: null,
  jwt: null,
  loading: false,
  setFirebaseUser: (u) => set({ firebaseUser: u }),
  setJwt: async (token) => {
    if (token) await SecureStore.setItemAsync("auth_token", token);
    else await SecureStore.deleteItemAsync("auth_token");
    set({ jwt: token });
  },
  authenticateBackend: async (firebaseToken: string) => {
    set({ loading: true });
    try {
      const { jwt } = await ApiService.authWithFirebase(firebaseToken);
      await SecureStore.setItemAsync("auth_token", jwt);
      set({ jwt, loading: false });
    } catch (e) {
      set({ loading: false });
      throw e;
    }
  },
  logout: async () => {
    await SecureStore.deleteItemAsync("auth_token");
    set({ firebaseUser: null, jwt: null });
  }
}));