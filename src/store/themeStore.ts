// src/store/themeStore.ts
import { create } from 'zustand';
import { ThemeState } from '../types/store';

export const useThemeStore = create<ThemeState>(set => ({
  theme: 'coffee', // Default theme
  setTheme: newTheme => set({ theme: newTheme }),
}));
