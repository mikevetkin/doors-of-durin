import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import { InputViewState } from '@/core/view-state/InputViewState';
import { IthildinViewState } from '@/shared/Ithildin/ui/components/Ithildin/IthildinViewState';

export class DoorsOfDurinViewState {
  ithildin: IthildinViewState;
  codeInput: InputViewState;
  enterButton: ButtonViewState;

  constructor(props: DoorsOfDurinViewState) {
    this.ithildin = props.ithildin;
    this.codeInput = props.codeInput;
    this.enterButton = props.enterButton;
  }
}
