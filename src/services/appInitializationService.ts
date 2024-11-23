import { useClassStore } from '../store/useClassStore';
import { useDocumentStore } from '../store/useDocumentStore';

export async function initializeApp() {
  // Initialize DocumentStore (subscribe to EventBus)
  const { initialize: initializeDocumentStore } = useDocumentStore.getState();
  initializeDocumentStore();

  // Initialize ClassStore (fetch initial data)
  const { initialize: initializeClassStore } = useClassStore.getState();
  await initializeClassStore();

  console.log('App initialization complete');
}
