import { doorsOfDurinReducer } from './DoorsOfDurinReducer';
import { doorsOfDurinState } from './DoorsOfDurinState';

/**
 * Какие требования должна реализовать система
 */
describe('Doors of Durin Events', () => {
  describe('SayCodeEvent - сказать код', () => {});
  describe('MoonBeganShineEvent - начинает светить луна', () => {
    const state = doorsOfDurinReducer(doorsOfDurinState(), {
      type: 'MoonBeganShineEvent',
    });
    test('В стейт выставляется соответствующий флаг', () => {
      expect(state.isMoonShining).toBe(true);
    });
  });
});
