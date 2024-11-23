import { Theme } from '../constants/themes';

// State for Class
export interface Class {
  id: number;
  name: string;
}

export interface ClassState {
  selectedClass: string | null;
  classes: Class[]; // Array of classes
  setSelectedClass: (cls: string | null) => Promise<void>;
  initialize: () => Promise<void>;
}

export interface AppDocument {
  id: string; // Unique identifier for the document
  title: string; // Title of the document
  content?: string; // Optional content of the document
  [key: string]: unknown; // Additional properties (optional)
}

export interface DocumentState {
  documents: AppDocument[]; // List of documents in the state
  setDocuments: (docs: AppDocument[]) => void; // Function to update the documents
  selectedDocument: string | null; // ID of the selected document
  setSelectedDocument: (docId: string | null) => void; // Function to set the selected document
  initialize: () => void; // Function to initialize subscriptions or other setup
}

// State for Theme
export interface ThemeState {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}
