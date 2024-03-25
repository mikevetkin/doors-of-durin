import { useEffect, useReducer } from 'react';
import { doorsOfDurinReducer } from '../../domain/functional-core/DoorsOfDurinReducer';
import { doorsOfDurinState } from '../../domain/functional-core/DoorsOfDurinState';
import { appPresentation } from '@/AppPresentation';
import { FormKey } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormKey';

export const useDoorsOfDurin = () => {
  const [state, dispatch] = useReducer(
    doorsOfDurinReducer,
    doorsOfDurinState()
  );

  useEffect(() => {
    setTimeout(() => dispatch({ type: 'MoonBeganShineEvent' }), 3000);
  }, []);

  const changeForm = (key: FormKey, value: string) =>
    dispatch({
      type: 'ChangeFormEvent',
      key,
      value,
    });

  const enter = () =>
    dispatch({
      type: 'EnterEvent',
    });

  return {
    viewState: appPresentation(state),
    changeForm,
    enter,
  };
};
