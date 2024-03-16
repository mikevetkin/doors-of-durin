import { useReducer } from 'react';
import { doorsOfDurinReducer } from '../../domain/functional-core/DoorsOfDurinReducer';
import { doorsOfDurinState } from '../../domain/functional-core/DoorsOfDurinState';
import { doorsOfDurinPresentation } from '../pages/DoorsOfDurin/DoorsOfDurinPresentation';

export const useDoorsOfDurin = () => {
  const [state, dispatch] = useReducer(
    doorsOfDurinReducer,
    doorsOfDurinState()
  );

  const onChange = (value: string) => {
    return dispatch({
      type: 'SayCodeEvent',
      value,
    });
  };

  return {
    viewState: doorsOfDurinPresentation(state),
    onChange,
  };
};
