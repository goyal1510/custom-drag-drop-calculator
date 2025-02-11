import { create } from "zustand";

export const useCalculatorStore = create((set) => ({
  components: [],
  darkMode: true, // Track dark mode state

  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

  addComponent: (component) => set((state) => {
    const exists = state.components.some((comp) => comp.label === component.label);
    if (exists) {
      window.alert(`"${component.label}" is already added!`);
      return state;
    }
    return { components: [...state.components, component] };
  }),

  removeComponent: (index) => set((state) => ({
    components: state.components.filter((_, i) => i !== index),
  })),

  clearComponents: () => set({ components: [] }), // Clears all components
}));
