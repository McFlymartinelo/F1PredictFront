import { create } from "zustand";
import { ApiService } from "@services/api";
import { GrandPrix } from "@types/index";

interface CalendarState {
  grandPrix: GrandPrix[];
  loading: boolean;
  fetchCalendar: () => Promise<void>;
}

export const useCalendarStore = create<CalendarState>((set) => ({
  grandPrix: [],
  loading: false,
  fetchCalendar: async () => {
    set({ loading: true });
    try {
      const data = await ApiService.getCalendar();
      set({ grandPrix: data, loading: false });
    } catch (e) {
      set({ loading: false });
    }
  }
}));