import { FormKey } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormKey';
import { Light } from '../entity/light/Light';

export interface EnterEvent {
  type: 'EnterEvent';
}

export interface ChangeFormEvent {
  type: 'ChangeFormEvent';
  key: FormKey;
  value: string;
}

export interface ReceiveLightAnalisisEvent {
  type: 'ReceiveLightAnalisisEvent';
  light: Light | null;
}

/**
 * Какие события могут происходить в системе
 */
export type DoorsOfDurinEvent =
  | ChangeFormEvent
  | EnterEvent
  | ReceiveLightAnalisisEvent;
