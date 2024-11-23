import { create } from 'zustand';
import { ClassState } from '../types/store';
import { fetchClasses } from '../services/classService';
import { fetchDocuments } from '../services/documentService';
import { eventBus } from './eventBus'; // Import the Mitt-based EventBus

const LOCAL_STORAGE_KEY = 'selectedClass';

export const useClassStore = create<ClassState>((set, get) => ({
  selectedClass: localStorage.getItem(LOCAL_STORAGE_KEY) || null,
  classes: [],

  setSelectedClass: async cls => {
    if (cls) {
      localStorage.setItem(LOCAL_STORAGE_KEY, cls);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

    set({ selectedClass: cls });

    // Clear existing documents immediately
    eventBus.emit('documentsUpdated', []);

    // Fetch documents for the selected class
    const documents = await fetchDocuments(cls);

    // Emit events using Mitt-based EventBus
    eventBus.emit('classSelected', cls);
    eventBus.emit('documentsUpdated', documents);
  },

  initialize: async () => {
    try {
      const classes = await fetchClasses();
      set({ classes });

      const selectedClass = get().selectedClass;
      if (selectedClass) {
        // Fetch documents for the stored class
        const documents = await fetchDocuments(selectedClass);

        // Emit the updated documents via the EventBus
        eventBus.emit('documentsUpdated', documents);
      }
    } catch (error) {
      console.error('Failed to initialize', error);
    }
  },
}));
