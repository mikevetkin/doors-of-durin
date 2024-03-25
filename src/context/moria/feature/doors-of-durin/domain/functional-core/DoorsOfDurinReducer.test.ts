import { Friend } from '@/context/moria/feature/doors-of-durin/domain/entity/traveller/Friend';
import { doorsOfDurinReducer } from './DoorsOfDurinReducer';
import { doorsOfDurinState } from './DoorsOfDurinState';
import { Stranger } from '@/context/moria/feature/doors-of-durin/domain/entity/traveller/Stranger';

/**
 * Какие требования должна реализовать система
 */
describe('Doors of Durin Events', () => {
  describe('SayCodeEvent - сказать код', () => {
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
