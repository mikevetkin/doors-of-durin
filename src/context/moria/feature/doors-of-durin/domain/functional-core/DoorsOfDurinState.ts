import {
  Form,
  form,
} from '@/context/moria/feature/doors-of-durin/domain/entity/form/Form';
import { Stranger } from '../entity/traveller/Stranger';
import { Traveller } from '../entity/traveller/Traveller';

/**
 * В каких состояниях может находится система
 */
export interface DoorsOfDurinState {
  form: Form;
  isMoonShining: boolean;
  traveller: Traveller;
}

export const doorsOfDurinState = (
  data: Partial<DoorsOfDurinState> = {}
): DoorsOfDurinState => ({
  form: form(),
  isMoonShining: false,
  traveller: new Stranger(),
  ...data,
});
