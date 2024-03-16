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
});
