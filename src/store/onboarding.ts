import { create } from "zustand";

interface OnboardingState {
  currentStep: number;
  totalSteps: number;
  setStep: (step: number) => void;
  nextStep: () => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  currentStep: 1,
  totalSteps: 4,
  setStep: (step) => set({ currentStep: step }),
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.totalSteps),
    })),
}));
