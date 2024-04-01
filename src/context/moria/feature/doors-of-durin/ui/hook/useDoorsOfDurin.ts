import { useEffect, useReducer } from 'react';
import { doorsOfDurinReducer } from '../../domain/functional-core/DoorsOfDurinReducer';
import { doorsOfDurinState } from '../../domain/functional-core/DoorsOfDurinState';
import { appPresentation } from '@/AppPresentation';
import { FormKey } from '@/context/moria/feature/doors-of-durin/domain/entity/form/FormKey';
import { moonlight } from '../../domain/entity/light/Moonlight';

export const useDoorsOfDurin = () => {
  const [state, dispatch] = useReducer(
    doorsOfDurinReducer,
    doorsOfDurinState()
  );

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

  /**
   * Эмуляция получения данных от сервера со спектрометром
   */
  useEffect(() => {
    setTimeout(
      () => dispatch({ type: 'ReceiveLightAnalisisEvent', light: moonlight() }),
      3000
    );
  }, []);

  return {
    viewState: appPresentation(state),
    changeForm,
    enter,
  };
};
