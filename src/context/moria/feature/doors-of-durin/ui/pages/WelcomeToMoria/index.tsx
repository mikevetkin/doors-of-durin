import { WelcomeToMoriaViewState } from './WelcomeToMoriaViewState';

interface WelcomeToMoria {
  viewState: WelcomeToMoriaViewState;
}

export const WelcomeToMoria: React.FC<WelcomeToMoria> = ({ viewState }) => {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="flex flex-col gap-4">
        <h2>{viewState.greeting}</h2>
      </div>
    </div>
  );
};
