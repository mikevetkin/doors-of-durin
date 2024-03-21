export interface SayCodeEvent {
  type: 'SayCodeEvent';
  value: string;
}

/**
 * Какие события могут происходить в системе
 */
export type DoorsOfDurinEvent = SayCodeEvent;
