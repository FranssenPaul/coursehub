// fetchDocuments.ts
import { apiClient } from './apiClient';
import { AppDocument } from '../types/store';
import { getBasePath } from '../utils/basePath';

export const fetchDocuments = async (
  className: string | null
): Promise<AppDocument[]> => {
  if (!className) {
    console.warn('No class name provided for fetching documents.');
    return [];
  }

  try {
    // Ensure the base URL is properly formatted

    const url = `${getBasePath()}${className}/documents.json`; // Construct the full URL

    // Fetch documents using the API client
    const documents = await apiClient<AppDocument[]>(url);

    // Optional: Validate the documents
    if (
      !Array.isArray(documents) ||
      documents.some(doc => !doc.id || !doc.title)
    ) {
      console.error('Invalid document structure:', documents);
      return [];
    }

    return documents;
  } catch (error) {
    console.error(`Error fetching documents for class "${className}":`, error);

    throw new Error('Failed to fetch documents. Please try again later.');
  }
};
