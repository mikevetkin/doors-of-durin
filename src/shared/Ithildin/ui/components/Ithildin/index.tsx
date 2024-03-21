import { ReactNode } from 'react';
import { IthildinViewState } from './IthildinViewState';

interface IthildinProps {
  viewState: IthildinViewState;
  children: ReactNode;
}

export const Ithildin: React.FC<IthildinProps> = ({ children, viewState }) => {
  return (
    <div
      className={`transition duration-700 ease-in-out ${viewState.isGlow ? 'text-white drop-shadow-[0_0_10px_rgba(109,106,255,1)]' : 'text-gray-900'}`}
    >
      {children}
    </div>
  );
};
