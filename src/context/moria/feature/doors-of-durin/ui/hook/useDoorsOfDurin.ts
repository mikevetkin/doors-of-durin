import { useEffect, useReducer } from 'react';
import { doorsOfDurinReducer } from '../../domain/functional-core/DoorsOfDurinReducer';
import { doorsOfDurinState } from '../../domain/functional-core/DoorsOfDurinState';
import { appPresentation } from '@/AppPresentation';

export const useDoorsOfDurin = () => {
  const [state, dispatch] = useReducer(
    doorsOfDurinReducer,
    doorsOfDurinState()
  );

  useEffect(() => {
    setTimeout(() => dispatch({ type: 'MoonBeganShineEvent' }), 3000);
  }, []);

  const changeCode = (value: string) =>
    dispatch({
      type: 'SayCodeEvent',
      value,
    });

  return {
    viewState: appPresentation(state),
    changeCode,
  };
};
