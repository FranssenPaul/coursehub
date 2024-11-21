// src/store/useClassStore.ts
import { create } from 'zustand';
import { ClassState } from '../types/store';

export const useClassStore = create<ClassState>(set => ({
  selectedClass: null,
  classes: [],

  setSelectedClass: (cls: string | null) => {
    set({ selectedClass: cls });
    localStorage.setItem('selectedClass', cls || '');
  },

  setClasses: (clsArray: any[]) => set({ classes: clsArray }),
}));
