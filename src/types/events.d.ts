import { AppDocument } from './store';

export type EventTypes = Record<string, unknown> & {
  classSelected: string | null; // Payload: selected class ID or null
  documentsUpdated: AppDocument[]; // Payload: updated documents
};
