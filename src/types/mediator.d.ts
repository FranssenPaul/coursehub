// src/types/mediator.d.ts
export interface StoreMediator {
  initialize: () => Promise<void>; // Initialize the stores (e.g., fetch initial data)
  onClassSelected: (className: string | null) => Promise<void>; // Handle class selection
  openDocument: (className: string, documentName: string) => void; // Handle document opening
}
