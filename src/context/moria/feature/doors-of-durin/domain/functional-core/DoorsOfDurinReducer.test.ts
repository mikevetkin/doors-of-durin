import { Friend, friend } from '../entity/Friend';
import { Stranger } from '../entity/Stranger';
import { doorsOfDurinReducer } from './DoorsOfDurinReducer';
import { doorsOfDurinState } from './DoorsOfDurinState';

/**
 * Какие требования должна реализовать система
 */
describe.skip('Doors of Durin Events', () => {
  describe('SayCodeEvent - сказать код', () => {
    test('Заносит код в стейт', () => {
      const state = doorsOfDurinReducer(doorsOfDurinState(), {
        type: 'SayCodeEvent',
        value: 'annon edhellen, edro hi ammen',
      });

      expect(state.code).toEqual('annon edhellen, edro hi ammen');
    });

    test('Безразличен к регистру', () => {
      const state = doorsOfDurinReducer(doorsOfDurinState(), {
        type: 'SayCodeEvent',
        value: 'Annon edhellen, edro hi ammen',
      });

      expect(state.code).toEqual('annon edhellen, edro hi ammen');
    });
  });

  describe.skip('EnterEvent - попытаться войти', () => {
    test('Если сказан верный код, помечает путника, как друга', () => {
      const state = doorsOfDurinReducer(
        doorsOfDurinState({
          code: 'mellon',
        }),
        {
          type: 'EnterEvent',
        }
      );

      expect(state.traveller).toBeInstanceOf(Friend);
    });

    test('Если сказан неверный код, помечает путника, как чужака', () => {
      const state = doorsOfDurinReducer(
        doorsOfDurinState({
          code: 'something',
          traveller: friend(),
        }),
        {
          type: 'EnterEvent',
        }
      );

      expect(state.traveller).toBeInstanceOf(Stranger);
    });
  });
});
