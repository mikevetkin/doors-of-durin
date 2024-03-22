import { WelcomeToMoriaViewState } from './WelcomeToMoriaViewState';
import './styles.css';

interface WelcomeToMoria {
  viewState: WelcomeToMoriaViewState;
}

export const WelcomeToMoria: React.FC<WelcomeToMoria> = ({ viewState }) => {
  return (
    <div className="wrapper flex h-[100svh] items-center justify-center">
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-3xl">{viewState.greeting}</h2>
      </div>
    </div>
  );
};
