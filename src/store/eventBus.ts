import mitt from 'mitt';
import type { EventTypes } from '../types/events';

// Initialize the Mitt event bus with EventTypes
export const eventBus = mitt<EventTypes>();

// Example usage:
// eventBus.emit('classSelected', 'ClassID');
// eventBus.on('documentsUpdated', (docs) => console.log(docs));
