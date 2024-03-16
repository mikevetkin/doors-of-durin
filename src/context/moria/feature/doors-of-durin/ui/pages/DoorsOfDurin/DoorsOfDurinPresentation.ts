import { IthildinViewState } from '@/shared/Ithildin/ui/components/Ithildin/IthildinViewState';
import { DoorsOfDurinState } from '../../../domain/functional-core/DoorsOfDurinState';
import { DoorsOfDurinViewState } from './DoorsOfDurinViewState';
import { InputViewState } from '@/core/view-state/InputViewState';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';

export const doorsOfDurinPresentation = (
  state: DoorsOfDurinState
): DoorsOfDurinViewState => {
  return new DoorsOfDurinViewState({
    ithildin: new IthildinViewState(),
    codeInput: new InputViewState({
      value: state.code,
      disabled: false,
    }),
    enterButton: new ButtonViewState({
      label: 'Войти',
      disabled: false,
    }),
  });
};
