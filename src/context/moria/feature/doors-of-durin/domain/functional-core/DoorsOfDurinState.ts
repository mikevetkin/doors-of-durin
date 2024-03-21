import { Stranger } from '../entity/Stranger';
import { Traveller } from '../entity/Traveller';

/**
 * В каких состояниях может находится система
 */
export interface DoorsOfDurinState {
  traveller: Traveller;
}

export const doorsOfDurinState = (
  data: Partial<DoorsOfDurinState> = {}
): DoorsOfDurinState => ({
  traveller: new Stranger(),
  ...data,
});
