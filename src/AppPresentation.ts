import { AppViewState } from './AppViewState';
import { Friend } from './context/moria/feature/doors-of-durin/domain/entity/Friend';
import { DoorsOfDurinState } from './context/moria/feature/doors-of-durin/domain/functional-core/DoorsOfDurinState';
import { doorsOfDurinPresentation } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin/DoorsOfDurinPresentation';
import { WelcomeToMoriaViewState } from './context/moria/feature/doors-of-durin/ui/pages/WelcomeToMoria/WelcomeToMoriaViewState';

export const appPresentation = (state: DoorsOfDurinState): AppViewState => {
  if (state.traveller instanceof Friend) {
    return new WelcomeToMoriaViewState({
      greeting: state.traveller.greeting,
    });
  } else {
    return doorsOfDurinPresentation(state);
  }
};
