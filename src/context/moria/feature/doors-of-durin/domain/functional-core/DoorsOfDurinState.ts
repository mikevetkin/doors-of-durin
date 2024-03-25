import { Stranger } from '../entity/Stranger';
import { Traveller } from '../entity/Traveller';

/**
 * В каких состояниях может находится система
 */
export interface DoorsOfDurinState {
  isMoonShining: boolean;
  traveller: Traveller;
}

export const doorsOfDurinState = (
  data: Partial<DoorsOfDurinState> = {}
): DoorsOfDurinState => ({
  isMoonShining: false,
  traveller: new Stranger(),
  ...data,
});
