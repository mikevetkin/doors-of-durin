import { IthildinViewState } from '@/shared/Ithildin/ui/components/Ithildin/IthildinViewState';
import { DoorsOfDurinState } from '../../../domain/functional-core/DoorsOfDurinState';
import { DoorsOfDurinViewState } from './DoorsOfDurinViewState';

export const doorsOfDurinPresentation = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  state: DoorsOfDurinState
): DoorsOfDurinViewState => {
  return new DoorsOfDurinViewState({
    ithildin: new IthildinViewState({
      isGlow: state.isMoonShining,
    }),
  });
};
