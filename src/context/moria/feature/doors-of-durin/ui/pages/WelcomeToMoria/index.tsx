import { WelcomeToMoriaViewState } from './WelcomeToMoriaViewState';
import './styles.css';

interface WelcomeToMoria {
  viewState: WelcomeToMoriaViewState;
}

export const WelcomeToMoria: React.FC<WelcomeToMoria> = ({ viewState }) => {
  return (
    <div className="wrapper flex h-[100vh] items-center justify-center">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-medium">{viewState.greeting}</h2>
      </div>
    </div>
  );
};
