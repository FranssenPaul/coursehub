// src/store/useDocumentStore.ts
import { create } from 'zustand';
import { DocumentState } from '../types/store';

export const useDocumentStore = create<DocumentState>(set => ({
  selectedDocument: null,
  documents: [],

  setSelectedDocument: doc => set({ selectedDocument: doc }),

  setDocuments: docs => set({ documents: docs }),
}));
