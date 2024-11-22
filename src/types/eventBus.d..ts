// src/types/mediator.d.ts
export interface useEventBusStore {
  listeners: Map<string, Function[]>;
  subscribe: (event: string, callback: Function) => void;
  emit: (event: string, payload: any) => void;
  unsubscribe: (event: string, callback: Function) => void;
}
