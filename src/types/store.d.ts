// State for Class
export interface Class {
  id: number;
  name: string;
}

export interface ClassState {
  selectedClass: string | null;
  classes: Class[]; // Array of classes
  setSelectedClass: (cls: string | null) => void;
  fetchClasses: () => Promise<void>;
}


// State for Document
export interface DocumentState {
  selectedDocument: string | null;
  setSelectedDocument: (doc: string) => void;
}

// State for Theme
export interface ThemeState {
  theme: string;
  setTheme: (newTheme: string) => void;
}
