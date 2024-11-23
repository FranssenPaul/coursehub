import { apiClient } from './apiClient';
import { Class } from '../types/store';
import { getBasePath } from '../utils/basePath';

// Fetch Classes
export const fetchClasses = async (): Promise<Class[]> => {
  // Ensure the base URL is prefixed if required
  const url = `${getBasePath()}classes.json`; // Construct the full URL
  return await apiClient<Class[]>(url);
};
// Fetch Documents
