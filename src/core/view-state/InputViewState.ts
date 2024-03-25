export class InputViewState<K> {
  key: K;
  label: string;
  value: string;
  disabled?: boolean;

  constructor(param: InputViewState<K>) {
    this.key = param.key;
    this.value = param.value;
    this.disabled = param.disabled;
    this.label = param.label;
  }
}
