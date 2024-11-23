import { create } from 'zustand';
import { AppDocument, DocumentState } from '../types/store';
import { eventBus } from './eventBus'; // Import the Mitt-based EventBus

export const useDocumentStore = create<DocumentState>(set => ({
  documents: [], // Initialize with an empty list
  selectedDocument: null, // No document selected initially

  setDocuments: docs => {
    set({ documents: docs, selectedDocument: null }); // Reset selectedDocument to null
  },

  setSelectedDocument: docId => {
    set({ selectedDocument: docId });
  },

  initialize: () => {
    // Subscribe to the EventBus for 'documentsUpdated' events
    const updateDocuments = (updatedDocuments: AppDocument[]) => {
      set({ documents: updatedDocuments, selectedDocument: null }); // Reset selectedDocument to null
    };

    eventBus.on('documentsUpdated', updateDocuments);

    // Cleanup listener when the store is unmounted or no longer in use
    return () => {
      eventBus.off('documentsUpdated', updateDocuments);
    };
  },
}));
