import { Friend } from '../entity/Friend';
import { Stranger } from '../entity/Stranger';
import { doorsOfDurinReducer } from './DoorsOfDurinReducer';
import { doorsOfDurinState } from './DoorsOfDurinState';

/**
 * Какие требования должна реализовать система
 */
describe('Doors of Durin Events', () => {
  describe('SayCodeEvent - сказать код', () => {
    const state = doorsOfDurinReducer(doorsOfDurinState(), {
      type: 'SayCodeEvent',
      value: 'Annon edhellen, edro hi ammen',
    });
    test('заносит код в стейт', () => {
      expect(state.code).toEqual('Annon edhellen, edro hi ammen');
    });
  });

  describe('EnterEvent - попытаться войти', () => {
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
        }),
        {
          type: 'EnterEvent',
        }
      );

      expect(state.traveller).toBeInstanceOf(Stranger);
    });
  });
});
