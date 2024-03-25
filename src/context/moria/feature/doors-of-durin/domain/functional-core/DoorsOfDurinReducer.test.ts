import { Friend } from '@/context/moria/feature/doors-of-durin/domain/entity/traveller/Friend';
import { doorsOfDurinReducer } from './DoorsOfDurinReducer';
import { doorsOfDurinState } from './DoorsOfDurinState';
import { Stranger } from '@/context/moria/feature/doors-of-durin/domain/entity/traveller/Stranger';
import { form } from '@/context/moria/feature/doors-of-durin/domain/entity/form/Form';

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

  describe.skip('SayCodeEvent - сказать код', () => {
    test('Если сказан верный код, то это друг', () => {
      const state = doorsOfDurinReducer(doorsOfDurinState(), {
        type: 'SayCodeEvent',
        value: 'mellon',
      });
      expect(state.traveller).toBeInstanceOf(Friend);
    });

    test('Если верный код не сказан, то это чужак', () => {
      const state = doorsOfDurinReducer(doorsOfDurinState(), {
        type: 'SayCodeEvent',
        value: 'abra kadabra',
      });
      expect(state.traveller).toBeInstanceOf(Stranger);
    });
  });
  describe('MoonBeganShineEvent - начинает светить луна', () => {
    const state = doorsOfDurinReducer(doorsOfDurinState(), {
      type: 'MoonBeganShineEvent',
    });
    test('В стейт выставляется соответствующий флаг', () => {
      expect(state.isMoonShining).toBe(true);
    });
  });
});
