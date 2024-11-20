// src/services/documentService.ts

export const fetchDocuments = async (
  className: string | null
): Promise<any[]> => {
  if (!className) {
    console.warn('No class name provided for fetching documents.');
    return [];
  }

  try {
    const basePath = import.meta.env.BASE_URL; // Dynamically handles base URL
    const url = `${basePath}${className}/documents.json`;

    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch documents for class: ${className}`);
      return [];
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      console.warn(
        `Invalid data format received for documents in class: ${className}`
      );
      return [];
    }

    return data;
  } catch (error) {
    console.error(`Error fetching documents for class ${className}:`, error);
    return [];
  }
};
