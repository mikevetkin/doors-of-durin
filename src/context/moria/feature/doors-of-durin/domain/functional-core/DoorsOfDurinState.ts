import { Stranger } from '../entity/Stranger';
import { Traveller } from '../entity/Traveller';

/**
 * В каких состояниях может находится система
 */
export interface DoorsOfDurinState {
  code: string;
  traveller: Traveller;
}

export const doorsOfDurinState = (
  data: Partial<DoorsOfDurinState> = {}
): DoorsOfDurinState => ({
  code: '',
  traveller: new Stranger(),
  ...data,
});
