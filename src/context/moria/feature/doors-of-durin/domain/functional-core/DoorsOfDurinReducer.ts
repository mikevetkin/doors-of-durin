import { Friend } from '../entity/Friend';
import { Stranger } from '../entity/Stranger';
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
  const frientResult = Friend.parse(state.code);

  console.log('frientResult :>> ', frientResult);

  return {
    ...state,
    traveller: frientResult.isOk ? frientResult.value : new Stranger(),
  };
}
