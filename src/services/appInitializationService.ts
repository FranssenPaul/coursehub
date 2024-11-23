import { useClassStore } from '../store/useClassStore';
import { useDocumentStore } from '../store/useDocumentStore';

export async function initializeApp(): Promise<void> {
  try {
    // Initialize DocumentStore (subscribe to EventBus)
    const { initialize: initializeDocumentStore } = useDocumentStore.getState();
    initializeDocumentStore();

    // Initialize ClassStore (fetch initial data)
    const { initialize: initializeClassStore } = useClassStore.getState();
    await initializeClassStore();

    console.log('App initialization complete');
  } catch (error) {
    console.error('Failed to initialize the app:', error);
    throw error; // Re-throw the error to handle it higher up if needed
  }
}
