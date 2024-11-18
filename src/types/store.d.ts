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
