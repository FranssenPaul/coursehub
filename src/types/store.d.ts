// State for Class
export interface Class {
  id: number;
  name: string;
}

export interface ClassState {
  selectedClass: string | null;
  classes: Class[]; // Array of classes
  setSelectedClass: (cls: string | null) => void;
  setClasses: (clsArray: any[]) => void;
}

export interface Document {
  id: string;
  name: string;
}

// State for Document
export interface DocumentState {
  selectedDocument: string | null;
  documents: Document[]; // Array of documents
  setSelectedDocument: (doc: string) => void;
  setDocuments: (docs: Document[]) => void;
}

// State for Theme
export interface ThemeState {
  theme: string;
  setTheme: (newTheme: string) => void;
}

