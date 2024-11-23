import { apiClient } from './apiClient';
import { Class } from '../types/store';

// Fetch Classes
export const fetchClasses = async (): Promise<Class[]> => {
  // Ensure the base URL is prefixed if required
  const basePath = import.meta.env.BASE_URL?.replace(/\/+$/, '') || ''; // Trim trailing slash if any
  const url = `${basePath}classes.json`; // Construct the full URL
  return await apiClient<Class[]>(url);
};
