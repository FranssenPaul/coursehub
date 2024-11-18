// State for Class
export interface ClassState {
  selectedClass: string | null;
  setSelectedClass: (cls: string) => void;
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
