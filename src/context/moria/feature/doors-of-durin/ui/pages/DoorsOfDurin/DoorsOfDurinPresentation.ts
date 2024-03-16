import { IthildinViewState } from '@/shared/Ithildin/ui/components/Ithildin/IthildinViewState';
import { DoorsOfDurinState } from '../../../domain/functional-core/DoorsOfDurinState';
import { DoorsOfDurinViewState } from './DoorsOfDurinViewState';

export const doorsOfDurinPresentation = (
  state: DoorsOfDurinState
): DoorsOfDurinViewState => {
  return {
    ithildin: new IthildinViewState(),
  };
};
