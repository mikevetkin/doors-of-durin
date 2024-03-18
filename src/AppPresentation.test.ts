import { appPresentation } from './AppPresentation';
import { friend } from './context/moria/feature/doors-of-durin/domain/entity/Friend';
import { Stranger } from './context/moria/feature/doors-of-durin/domain/entity/Stranger';
import { doorsOfDurinState } from './context/moria/feature/doors-of-durin/domain/functional-core/DoorsOfDurinState';
import { DoorsOfDurinViewState } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin/DoorsOfDurinViewState';
import { WellcomeToMoriaViewState } from './context/moria/feature/doors-of-durin/ui/pages/WellcomeToMoria/WellcomeToMoriaViewState';

describe('Представление Мории', () => {
  test('Если прохожий оказался другом, то он видит приветствие', () => {
    const viewState = appPresentation(
      doorsOfDurinState({
        traveller: friend(),
      })
    );

    expect(viewState).toBeInstanceOf(WellcomeToMoriaViewState);
  });

  test('Если прохожий оказался чужаком, то он видит закрытые врата в Морию', () => {
    const viewState = appPresentation(
      doorsOfDurinState({
        traveller: new Stranger(),
      })
    );

    expect(viewState).toBeInstanceOf(DoorsOfDurinViewState);
  });
});
