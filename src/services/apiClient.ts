export const apiClient = async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data as T;
    } catch (error) {
      console.error(`API Client Error (${url}):`, error);
      throw error; // Re-throw to let the caller handle the error
    }
  };
  