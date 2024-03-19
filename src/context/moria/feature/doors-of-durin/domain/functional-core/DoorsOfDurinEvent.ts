export interface SayCodeEvent {
  type: 'SayCodeEvent';
  value: string;
}

export interface EnterEvent {
  type: 'EnterEvent';
}

/**
 * Какие события могут происходить в системе
 */
export type DoorsOfDurinEvent = SayCodeEvent | EnterEvent;
