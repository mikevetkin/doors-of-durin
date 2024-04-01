import { IthildinViewState } from '@/shared/Ithildin/ui/components/Ithildin/IthildinViewState';
import { DoorsOfDurinState } from '../../../domain/functional-core/DoorsOfDurinState';
import { DoorsOfDurinViewState } from './DoorsOfDurinViewState';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import { FormItems } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormItems';
import { InputViewState } from '@/core/view-state/InputViewState';

export const doorsOfDurinPresentation = (
  state: DoorsOfDurinState
): DoorsOfDurinViewState => {
  return new DoorsOfDurinViewState({
    ithildin: new IthildinViewState({
      isGlow: state.isIthildinShining,
    }),
    form: FormItems.map(
      (item) =>
        new InputViewState({
          key: item.key,
          label: item.name,
          value: state.form[item.key],
        })
    ),
    enter: new ButtonViewState({
      label: 'Enter',
      disabled: state.form.code.length === 0 || state.form.name.length === 0,
    }),
  });
};
