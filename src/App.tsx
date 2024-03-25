import { ReactNode } from 'react';
import './App.css';
import { ThemeProvider } from './components/ui/theme-provider';
import { useDoorsOfDurin } from './context/moria/feature/doors-of-durin/ui/hook/useDoorsOfDurin';
import { DoorsOfDurinPage } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin';
import { DoorsOfDurinViewState } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin/DoorsOfDurinViewState';
import { WelcomeToMoriaViewState } from './context/moria/feature/doors-of-durin/ui/pages/WelcomeToMoria/WelcomeToMoriaViewState';
import { WelcomeToMoria } from './context/moria/feature/doors-of-durin/ui/pages/WelcomeToMoria';

function App() {
  const { viewState, changeForm, enter } = useDoorsOfDurin();

  const content = (): ReactNode => {
    if (viewState instanceof DoorsOfDurinViewState) {
      return (
        <DoorsOfDurinPage
          viewState={viewState}
          changeForm={changeForm}
          enter={enter}
        />
      );
    } else if (viewState instanceof WelcomeToMoriaViewState) {
      return <WelcomeToMoria viewState={viewState} />;
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {content()}
    </ThemeProvider>
  );
}

export default App;
