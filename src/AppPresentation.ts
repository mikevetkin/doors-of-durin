import { AppViewState } from './AppViewState';
import { Friend } from './context/moria/feature/doors-of-durin/domain/entity/Friend';
import { DoorsOfDurinState } from './context/moria/feature/doors-of-durin/domain/functional-core/DoorsOfDurinState';
import { doorsOfDurinPresentation } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin/DoorsOfDurinPresentation';
import { welcomeToMoriaPresentation } from './context/moria/feature/doors-of-durin/ui/pages/WelcomeToMoria/WelcomeToMoriaPresentation';

export const appPresentation = (state: DoorsOfDurinState): AppViewState => {
  if (state.traveller instanceof Friend) {
    return welcomeToMoriaPresentation(state.traveller);
  } else {
    return doorsOfDurinPresentation(state);
  }
};
