import { DoorsOfDurinEvent } from './DoorsOfDurinEvent';
import { DoorsOfDurinState } from './DoorsOfDurinState';

/**
 * Как система должна реагировать присылаемые в неё события
 */
export const doorsOfDurinReducer = (
  state: DoorsOfDurinState,
  event: DoorsOfDurinEvent
) => {
  switch (event.type) {
    case 'SayNameEvent':
      return sayName(state);
    case 'EnterEvent':
      return enterEvent(state);
  }
};

function sayName(state: DoorsOfDurinState): DoorsOfDurinState {
  return state;
}

function enterEvent(state: DoorsOfDurinState): DoorsOfDurinState {
  return state;
}
