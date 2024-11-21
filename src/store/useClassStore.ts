// src/store/useClassStore.ts
import { create } from 'zustand';
import { ClassState } from '../types/store';
import { useDocumentStore } from './useDocumentStore';
import { fetchClassesFromApi } from '../services/classService';
import { fetchDocuments } from '../services/documentService';

const LOCAL_STORAGE_KEY = 'selectedClass';

export const useClassStore = create<ClassState>((set, get) => ({
  selectedClass: localStorage.getItem(LOCAL_STORAGE_KEY) || null, // Initialize from LocalStorage
  classes: [], // Initialize an empty list of classes

  setSelectedClass: async cls => {
    if (cls) {
      localStorage.setItem(LOCAL_STORAGE_KEY, cls); // Save to LocalStorage
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY); // Remove if null
    }

    set({ selectedClass: cls });

    // Fetch documents for the selected class using the service
    const documents = await fetchDocuments(cls);
    const { setDocuments } = useDocumentStore.getState();
    setDocuments(documents);
  },

  fetchClasses: async () => {
    // Fetch classes using the service
    const classes = await fetchClassesFromApi();
    set({ classes });
  },

  initialize: async () => {
    try {
      await get().fetchClasses();

      const selectedClass = get().selectedClass;
      if (selectedClass) {
        // Fetch documents for the stored class using the service
        const documents = await fetchDocuments(selectedClass);
        const { setDocuments } = useDocumentStore.getState();
        setDocuments(documents);
      }
    } catch (error) {
      console.error('Failed to initialize', error);
    }
  },
}));
