import { create } from "zustand";

interface HeaderState {
    isOpen: boolean;
    handleOpen: () => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
    isOpen: false,
    handleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
