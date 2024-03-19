import { Friend } from '../entity/Friend';
import { Stranger } from '../entity/Stranger';
import { DoorsOfDurinEvent as Event, SayCodeEvent } from './DoorsOfDurinEvent';
import { DoorsOfDurinState as State } from './DoorsOfDurinState';

/**
 * Как система должна реагировать присылаемые в неё события
 */
export const doorsOfDurinReducer = (state: State, event: Event) => {
  switch (event.type) {
    case 'SayCodeEvent':
      return sayCode(state, event);
    case 'EnterEvent':
      return enterEvent(state);
  }
};

function sayCode(state: State, event: SayCodeEvent): State {
  return {
    ...state,
    code: event.value.toLowerCase(),
  };
}

function enterEvent(state: State): State {
  const frientResult = Friend.parse(state.code);

  return {
    ...state,
    traveller: frientResult.isOk ? frientResult.value : new Stranger(),
  };
}
