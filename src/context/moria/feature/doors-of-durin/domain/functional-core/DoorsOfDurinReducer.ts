import { CorrectCode } from '../entity/code/Code';
import { Friend } from '../entity/traveller/Friend';
import { Name } from '../entity/name/Name';
import { Stranger } from '../entity/traveller/Stranger';
import {
  ChangeFormEvent,
  DoorsOfDurinEvent as Event,
  ReceiveLightAnalisisEvent,
} from './DoorsOfDurinEvent';
import { DoorsOfDurinState as State } from './DoorsOfDurinState';
import { of } from 'true-myth/maybe';
import { handleLight } from '@/shared/Ithildin/domain/lib/handleLight';

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
    case 'ReceiveLightAnalisisEvent':
      return receiveLightAnalisis(state, event);
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
    isIthildinShining: true,
  };
}

function receiveLightAnalisis(
  state: State,
  event: ReceiveLightAnalisisEvent
): State {
  const { light } = event;

  return {
    ...state,
    isIthildinShining: of(light).map(handleLight).unwrapOr(false),
  };
}
