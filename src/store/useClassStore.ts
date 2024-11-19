import { create } from 'zustand';
import { ClassState } from '../types/store';

export const useClassStore = create<ClassState>(set => ({
  selectedClass: null,
  classes: [], // Initialize an empty list of classes
  setSelectedClass: cls => set({ selectedClass: cls }),
  fetchClasses: async () => {
    try {
      const basePath = import.meta.env.BASE_URL; // Dynamically handles base URL
      const response = await fetch(`${basePath}classes.json`);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      set({ classes: data });
    } catch (error) {
      console.error('Failed to fetch classes:', error);
    }
  },
}));
