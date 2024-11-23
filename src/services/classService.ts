import { apiClient } from './apiClient';
import { Class } from '../types/store';
import { getBasePath } from '../utils/basePath';

export const fetchClasses = async (): Promise<Class[]> => {
  const url = `${getBasePath()}classes.json`;

  try {
    return await apiClient<Class[]>(url);
  } catch (error) {
    console.error('Failed to fetch classes:', error);
    throw new Error('Could not fetch classes. Please try again later.');
  }
};
