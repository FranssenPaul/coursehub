import { create } from 'zustand';
import { DocumentState } from '../types/store';

export const useDocumentStore = create<DocumentState>(set => ({
  selectedDocument: null,
  setSelectedDocument: doc => set({ selectedDocument: doc }),
}));
