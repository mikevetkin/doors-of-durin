import { CorrectCode } from '../entity/Code';
import { Friend } from '../entity/Friend';
import { Name } from '../entity/Name';
import { Stranger } from '../entity/Stranger';
import { Traveller } from '../entity/Traveller';
import { DoorsOfDurinEvent as Event, SayCodeEvent } from './DoorsOfDurinEvent';
import { DoorsOfDurinState as State } from './DoorsOfDurinState';

/**
 * Как система должна реагировать присылаемые в неё события
 */
export const doorsOfDurinReducer = (state: State, event: Event): State => {
  switch (event.type) {
    case 'SayCodeEvent':
      return sayCode(state, event);
    case 'MoonBeganShineEvent':
      return moonBeganShine(state);
  }
};

function sayCode(state: State, event: SayCodeEvent): State {
  const codeResult = CorrectCode.parse(event.value.toLowerCase());
  const nameResult = Name.parse('Frodo');

  const traveller: Traveller =
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
