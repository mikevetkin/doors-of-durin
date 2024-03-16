export interface SayNameEvent {
  type: 'SayNameEvent';
  value: string;
}

export interface EnterEvent {
  type: 'EnterEvent';
  // FIXME: Наверное на вход нужно подать меллона
}

/**
 * Какие события могут происходить в системе
 */
export type DoorsOfDurinEvent = SayNameEvent | EnterEvent;
