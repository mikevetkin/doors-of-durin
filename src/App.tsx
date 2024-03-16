import './App.css';
import { ThemeProvider } from './components/ui/theme-provider';
import { DoorsOfDurinPage } from './context/moria/feature/doors-of-durin/ui/pages/DoorsOfDurin';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <DoorsOfDurinPage />
    </ThemeProvider>
  );
}

export default App;
