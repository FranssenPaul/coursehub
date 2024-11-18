import { create } from 'zustand';
import { ClassState } from '../types/store';

export const useClassStore = create<ClassState>(set => ({
  selectedClass: null,
  setSelectedClass: cls => set({ selectedClass: cls }),
}));
