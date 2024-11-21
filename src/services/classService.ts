// src/services/classService.ts

export const fetchClasses = async (): Promise<any[]> => {
  try {
    const basePath = import.meta.env.BASE_URL; // Dynamically handles base URL
    const url = `${basePath}classes.json`;

    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch classes: HTTP ${response.status}`);
      return [];
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      console.warn(`Invalid data format received for classes.`);
      return [];
    }

    return data;
  } catch (error) {
    console.error('Error fetching classes:', error);
    return [];
  }
};
