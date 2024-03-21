export interface SayCodeEvent {
  type: 'SayCodeEvent';
  value: string;
}

export interface MoonBeganShine {
  type: 'MoonBeganShineEvent';
}

/**
 * Какие события могут происходить в системе
 */
export type DoorsOfDurinEvent = SayCodeEvent | MoonBeganShine;
