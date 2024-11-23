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
    try {
      // Update class selection
      updateClassSelection(cls);

      // Update local store state
      set({ selectedClass: cls });

      // Fetch and emit documents
      await fetchAndEmitDocuments(cls);
    } catch (error) {
      console.error('General error in setSelectedClass:', error);
    }
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
      throw error;
    }
  },
}));

const fetchAndEmitDocuments = async (cls: string | null): Promise<void> => {
  try {
    eventBus.emit('documentsUpdated', []); // Clear existing documents immediately
    const documents = await fetchDocuments(cls);
    eventBus.emit('documentsUpdated', documents);
  } catch (error) {
    console.error(`Error fetching documents for class "${cls}":`, error);
    eventBus.emit('error', 'Failed to fetch documents for the selected class.');
    // eventBus.emit('documentsUpdated', []); // Clear documents explicitly
    throw error;
  }
};

const updateClassSelection = (cls: string | null): void => {
  try {
    if (cls) {
      localStorage.setItem(LOCAL_STORAGE_KEY, cls);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
    eventBus.emit('classSelected', cls);
  } catch (error) {
    console.error(`Error while updating selected class "${cls}":`, error);
    eventBus.emit('error', 'Failed to update the selected class.');
    throw error;
  }
};
