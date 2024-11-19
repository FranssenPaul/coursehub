// src/store/themeStore.ts
import { create } from 'zustand';
import { ThemeState } from '../types/store';

const LOCAL_STORAGE_THEME_KEY = 'theme';

export const useThemeStore = create<ThemeState>(set => ({
  theme: localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 'bumblebee', // Default to 'light' theme
  setTheme: (newTheme: string) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme); // Save to localStorage
    set({ theme: newTheme });
  },
}));
