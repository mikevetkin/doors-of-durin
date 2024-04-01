import { Friend } from '@/context/moria/feature/doors-of-durin/domain/entity/traveller/Friend';
import { doorsOfDurinReducer } from './DoorsOfDurinReducer';
import { doorsOfDurinState } from './DoorsOfDurinState';
import { Stranger } from '@/context/moria/feature/doors-of-durin/domain/entity/traveller/Stranger';
import { form } from '@/context/moria/feature/doors-of-durin/domain/entity/form/Form';
import { moonlight } from '../entity/light/Moonlight';
import { starlight } from '../entity/light/Starlight';
import { sunlight } from '../entity/light/Sunlight';

/**
 * Какие требования должна реализовать система
 */
describe('Doors of Durin Events', () => {
  describe('ChangeFormEvent - Изменение формы', () => {
    test('Имя', () => {
      const state = doorsOfDurinReducer(doorsOfDurinState(), {
        type: 'ChangeFormEvent',
        key: 'name',
        value: 'Frodo',
      });

      expect(state.form.name).toEqual('Frodo');
    });

    test('Кодовое слово', () => {
      const state = doorsOfDurinReducer(doorsOfDurinState(), {
        type: 'ChangeFormEvent',
        key: 'code',
        value: 'Mellon',
      });

      expect(state.form.code).toEqual('Mellon');
    });
  });

  describe('EnterEvent - Вход в морию', () => {
    test('Если сказан код и имя, то это друг', () => {
      const state = doorsOfDurinReducer(
        doorsOfDurinState({
          form: form({
            code: 'mellon',
            name: 'Frodo',
          }),
        }),
        {
          type: 'EnterEvent',
        }
      );
      expect(state.traveller).toBeInstanceOf(Friend);
    });

    test('Если верный код или имя не сказаны, то это чужак', () => {
      const state = doorsOfDurinReducer(
        doorsOfDurinState({
          form: form({
            code: 'abra kadabra',
            name: '',
          }),
        }),
        {
          type: 'EnterEvent',
        }
      );
      expect(state.traveller).toBeInstanceOf(Stranger);
    });
  });

  describe('ReceiveLightAnalisisEvent - Получение анализа освещения', () => {
    test('Если это лунный свет, то итильдин светится', () => {
      const state = doorsOfDurinReducer(
        doorsOfDurinState({
          isIthildinShining: false,
        }),
        {
          type: 'ReceiveLightAnalisisEvent',
          light: moonlight(),
        }
      );

      expect(state.isIthildinShining).toBe(true);
    });

    test('Если это звёздный свет, то итильдин светится', () => {
      const state = doorsOfDurinReducer(
        doorsOfDurinState({
          isIthildinShining: false,
        }),
        {
          type: 'ReceiveLightAnalisisEvent',
          light: starlight(),
        }
      );

      expect(state.isIthildinShining).toBe(true);
    });

    test('Если это солнечный свет, то итильдин не светится', () => {
      const state = doorsOfDurinReducer(
        doorsOfDurinState({
          isIthildinShining: false,
        }),
        {
          type: 'ReceiveLightAnalisisEvent',
          light: sunlight(),
        }
      );

      expect(state.isIthildinShining).toBe(false);
    });

    test('Если данных нет, то итильдин не светится', () => {
      const state = doorsOfDurinReducer(
        doorsOfDurinState({
          isIthildinShining: false,
        }),
        {
          type: 'ReceiveLightAnalisisEvent',
          light: null,
        }
      );

      expect(state.isIthildinShining).toBe(false);
    });
  });

  describe('MoonBeganShineEvent - начинает светить луна', () => {
    const state = doorsOfDurinReducer(doorsOfDurinState(), {
      type: 'MoonBeganShineEvent',
    });
    test('В стейт выставляется соответствующий флаг', () => {
      expect(state.isIthildinShining).toBe(true);
    });
  });
});
