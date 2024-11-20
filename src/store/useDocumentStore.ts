// src/store/useDocumentStore.ts
import { create } from 'zustand';
import { DocumentState } from '../types/store';

export const useDocumentStore = create<DocumentState>(set => ({
  selectedDocument: null,
  documents: [],

  setSelectedDocument: doc => set({ selectedDocument: doc }),

  setDocuments: docs => set({ documents: docs }),

  openDocument: (className: string, documentName: string) => {
    if (!className || !documentName) {
      console.warn('Class name or document name is missing!');
      return;
    }

    const basePath = import.meta.env.BASE_URL;
    const fileUrl = `${basePath}${className}/${documentName}`;
    window.open(fileUrl, '_blank'); // Open the document in a new tab
  },
}));
