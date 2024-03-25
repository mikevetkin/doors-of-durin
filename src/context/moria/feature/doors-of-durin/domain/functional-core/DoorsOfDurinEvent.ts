import { FormKey } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormKey';

export interface EnterEvent {
  type: 'EnterEvent';
}

export interface ChangeFormEvent {
  type: 'ChangeFormEvent';
  key: FormKey;
  value: string;
}

export interface MoonBeganShine {
  type: 'MoonBeganShineEvent';
}

/**
 * Какие события могут происходить в системе
 */
export type DoorsOfDurinEvent = ChangeFormEvent | EnterEvent | MoonBeganShine;
