import { FormKey } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormKey';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import { InputViewState } from '@/core/view-state/InputViewState';
import { IthildinViewState } from '@/shared/Ithildin/ui/components/Ithildin/IthildinViewState';

export class DoorsOfDurinViewState {
  ithildin: IthildinViewState;
  form: InputViewState<FormKey>[];
  enter: ButtonViewState;

  constructor(props: DoorsOfDurinViewState) {
    this.ithildin = props.ithildin;
    this.form = props.form;
    this.enter = props.enter;
  }
}
