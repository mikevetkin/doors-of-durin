import { CorrectCode } from '../entity/code/Code';
import { Friend } from '../entity/traveller/Friend';
import { Name } from '../entity/name/Name';
import { Stranger } from '../entity/traveller/Stranger';
import {
  ChangeFormEvent,
  DoorsOfDurinEvent as Event,
} from './DoorsOfDurinEvent';
import { DoorsOfDurinState as State } from './DoorsOfDurinState';

/**
 * Как система должна реагировать присылаемые в неё события
 */
export const doorsOfDurinReducer = (state: State, event: Event): State => {
  switch (event.type) {
    case 'ChangeFormEvent':
      return changeForm(state, event);
    case 'EnterEvent':
      return enter(state);
    case 'MoonBeganShineEvent':
      return moonBeganShine(state);
  }
};

function changeForm(state: State, event: ChangeFormEvent): State {
  return {
    ...state,
    form: {
      ...state.form,
      [event.key]: event.value,
    },
  };
}

function enter(state: State): State {
  const { code, name } = state.form;

  const codeResult = CorrectCode.parse(code);
  const nameResult = Name.parse(name);

  const traveller =
    codeResult.isOk && nameResult.isOk
      ? new Friend({ code: codeResult.value, name: nameResult.value })
      : new Stranger();

  return {
    ...state,
    traveller,
  };
}

function moonBeganShine(state: State): State {
  return {
    ...state,
    isMoonShining: true,
  };
}
