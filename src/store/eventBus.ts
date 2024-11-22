// store/eventBus.ts
import { create } from 'zustand';
import { useEventBusStore } from '../types/eventBus';

export const useEventBusStore = create(set => ({
  listeners: new Map<string, Function[]>(),

  // Subscribe to an event
  subscribe: (event: string, callback: Function) => {
    set(state => {
      const currentListeners = state.listeners.get(event) || [];
      if (!currentListeners.includes(callback)) {
        state.listeners.set(event, [...currentListeners, callback]);
      }
      return { listeners: state.listeners };
    });
  },

  // Emit an event
  emit: (event: string, payload: any) => {
    const listeners = useEventBusStore.getState().listeners.get(event) || [];
    listeners.forEach(callback => callback(payload));
  },

  // Unsubscribe from an event
  unsubscribe: (event: string, callback: Function) => {
    set(state => {
      const currentListeners = state.listeners.get(event) || [];
      state.listeners.set(
        event,
        currentListeners.filter(listener => listener !== callback)
      );
      return { listeners: state.listeners };
    });
  },
}));
