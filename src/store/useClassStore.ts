import { create } from 'zustand';
import { ClassState } from '../types/store';

const LOCAL_STORAGE_KEY = 'selectedClass';

export const useClassStore = create<ClassState>(set => ({
  selectedClass: localStorage.getItem(LOCAL_STORAGE_KEY), // Initialize from LocalStorage
  classes: [], // Initialize an empty list of classes

  setSelectedClass: cls => {
    if (cls) {
      localStorage.setItem(LOCAL_STORAGE_KEY, cls); // Save to LocalStorage
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY); // Remove if null
    }
    set({ selectedClass: cls });
  },

  fetchClasses: async () => {
    try {
      const basePath = import.meta.env.BASE_URL; // Dynamically handles base URL
      const response = await fetch(`${basePath}classes.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      set({ classes: data });
    } catch (error) {
      console.error('Failed to fetch classes:', error);
    }
  },
}));
