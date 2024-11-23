import { create } from 'zustand';
import {
  AVAILABLE_THEMES,
  DEFAULT_THEME,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
} from '../constants/themes';
import { ThemeState } from '../types/store';

export const useThemeStore = create<ThemeState>(set => ({
  theme: (() => {
    try {
      const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
      return AVAILABLE_THEMES.includes(storedTheme as Theme)
        ? (storedTheme as Theme)
        : DEFAULT_THEME;
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return DEFAULT_THEME;
    }
  })(),
  setTheme: (newTheme: Theme) => {
    if (!AVAILABLE_THEMES.includes(newTheme)) {
      throw new Error(
        `Invalid theme: ${newTheme}. Available themes are: ${AVAILABLE_THEMES.join(', ')}`
      );
    }
    try {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      set({ theme: newTheme });
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  },
}));
