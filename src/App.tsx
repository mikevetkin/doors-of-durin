import { ReactNode } from 'react';
import './App.css';
import { ThemeProvider } from './components/ui/theme-provider';
import { useDoorsOfDurin } from './context/moria/feature/doors-of-durin/ui/hook/useDoorsOfDurin';
import { DoorsOfDurinPage } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin';
import { DoorsOfDurinViewState } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin/DoorsOfDurinViewState';
import { WellcomeToMoriaViewState } from './context/moria/feature/doors-of-durin/ui/pages/WellcomeToMoria/WellcomeToMoriaViewState';
import { WellcomeToMoria } from './context/moria/feature/doors-of-durin/ui/pages/WellcomeToMoria';

function App() {
  const { viewState, tryEnter, changeCode } = useDoorsOfDurin();

  const content = (): ReactNode => {
    if (viewState instanceof DoorsOfDurinViewState) {
      return (
        <DoorsOfDurinPage
          viewState={viewState}
          tryEnter={tryEnter}
          changeCode={changeCode}
        />
      );
    } else if (viewState instanceof WellcomeToMoriaViewState) {
      return <WellcomeToMoria />;
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {content()}
    </ThemeProvider>
  );
}

export default App;
