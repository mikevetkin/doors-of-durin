import { useReducer } from 'react';
import { doorsOfDurinReducer } from '../../domain/functional-core/DoorsOfDurinReducer';
import { doorsOfDurinState } from '../../domain/functional-core/DoorsOfDurinState';
import { appPresentation } from '@/AppPresentation';

export const useDoorsOfDurin = () => {
  const [state, dispatch] = useReducer(
    doorsOfDurinReducer,
    doorsOfDurinState()
  );

  const changeCode = (value: string) =>
    dispatch({
      type: 'SayCodeEvent',
      value,
    });

  // const tryEnter = () => dispatch({ type: 'EnterEvent' });

  return {
    viewState: appPresentation(state),
    changeCode,
    // tryEnter,
  };
};
