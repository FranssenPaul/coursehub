// src/mediator/storeMediator.ts
import { StoreMediator } from '../types/mediator';
import { useClassStore } from '../store/useClassStore';
import { useDocumentStore } from '../store/useDocumentStore';
import { fetchClasses } from '../services/classService';
import { fetchDocuments } from '../services/documentService';

export const storeMediator: StoreMediator = {
  initialize: async () => {
    const classStore = useClassStore.getState();
    const documentStore = useDocumentStore.getState();

    // Fetch classes
    const classes = await fetchClasses();
    classStore.setClasses(classes);

    // Handle pre-selected class from localStorage
    const selectedClass = localStorage.getItem('selectedClass');
    if (selectedClass) {
      classStore.setSelectedClass(selectedClass);
      const documents = await fetchDocuments(selectedClass);
      documentStore.setDocuments(documents);
    }
  },

  onClassSelected: async (className: string | null) => {
    const documentStore = useDocumentStore.getState();

    if (className) {
      const documents = await fetchDocuments(className);
      documentStore.setDocuments(documents);
    }
  },

  openDocument: (className: string, documentName: string) => {
    if (!className || !documentName) {
      console.warn('Class name or document name is missing!');
      return;
    }

    const basePath = import.meta.env.BASE_URL;
    const fileUrl = `${basePath}${className}/${documentName}`;
    window.open(fileUrl, '_blank'); // Open the document in a new tab
  },
};
