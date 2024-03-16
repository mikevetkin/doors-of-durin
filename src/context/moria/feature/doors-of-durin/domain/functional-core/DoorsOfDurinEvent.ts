export interface SayCodeEvent {
  type: 'SayCodeEvent';
  value: string;
}

export interface EnterEvent {
  type: 'EnterEvent';
  // FIXME: Наверное на вход нужно подать меллона
}

/**
 * Какие события могут происходить в системе
 */
export type DoorsOfDurinEvent = SayCodeEvent | EnterEvent;
