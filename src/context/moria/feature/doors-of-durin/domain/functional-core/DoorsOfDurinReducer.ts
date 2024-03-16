import { DoorsOfDurinEvent, SayCodeEvent } from './DoorsOfDurinEvent';
import { DoorsOfDurinState } from './DoorsOfDurinState';

/**
 * Как система должна реагировать присылаемые в неё события
 */
export const doorsOfDurinReducer = (
  state: DoorsOfDurinState,
  event: DoorsOfDurinEvent
) => {
  switch (event.type) {
    case 'SayCodeEvent':
      return sayName(state, event);
    case 'EnterEvent':
      return enterEvent(state);
  }
};

function sayName(
  state: DoorsOfDurinState,
  event: SayCodeEvent
): DoorsOfDurinState {
  return {
    ...state,
    code: event.value,
  };
}

function enterEvent(state: DoorsOfDurinState): DoorsOfDurinState {
  return state;
}
