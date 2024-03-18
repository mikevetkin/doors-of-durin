import { AppViewState } from './AppViewState';
import { Friend } from './context/moria/feature/doors-of-durin/domain/entity/Friend';
import { DoorsOfDurinState } from './context/moria/feature/doors-of-durin/domain/functional-core/DoorsOfDurinState';
import { doorsOfDurinPresentation } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin/DoorsOfDurinPresentation';
import { WellcomeToMoriaViewState } from './context/moria/feature/doors-of-durin/ui/pages/WellcomeToMoria/WellcomeToMoriaViewState';

export const appPresentation = (state: DoorsOfDurinState): AppViewState => {
  if (state.traveller instanceof Friend) {
    return new WellcomeToMoriaViewState();
  } else {
    return doorsOfDurinPresentation(state);
  }
};
