import { create } from 'zustand';
import { DocumentState } from '../types/store';

export const useDocumentStore = create<DocumentState>(set => ({
  selectedDocument: null,
  documents: [],

  setSelectedDocument: doc => set({ selectedDocument: doc }),

  setDocuments: docs => set({ documents: docs }), // Allows manual updating of documents

  fetchDocuments: async (className: string | null) => {
    if (!className) {
      set({ documents: [] });
      return;
    }

    try {
      const basePath = import.meta.env.BASE_URL;
      const url = `${basePath}${className}/documents.json`;
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          console.warn(`Subdirectory for class "${className}" not found.`);
        } else {
          console.warn(
            `Error fetching documents for class "${className}" (HTTP ${response.status}).`
          );
        }
        set({ documents: [] });
        return;
      }

      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error(
          `Invalid Content-Type for "${url}". Expected JSON, got: ${contentType}`
        );
        set({ documents: [] });
        return;
      }

      const data = await response.json();

      if (!Array.isArray(data) || data.length === 0) {
        console.warn(`Empty documents list returned for class "${className}"`);
        set({ documents: [] }); // Handle unexpected empty data
        return;
      }

      set({ documents: data });
    } catch (error) {
      console.error(
        `Failed to fetch documents for class "${className}":`,
        error
      );
      set({ documents: [] }); // Clear documents on error
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
}));
