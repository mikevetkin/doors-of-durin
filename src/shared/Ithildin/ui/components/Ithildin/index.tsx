import { ReactNode } from 'react';
import { IthildinViewState } from './IthildinViewState';

interface IthildinProps {
  viewState: IthildinViewState;
  children: ReactNode;
}

export const Ithildin: React.FC<IthildinProps> = ({ children, viewState }) => {
  return (
    <div
      className={`transition duration-700 ease-in-out ${viewState.isGlow ? 'text-glowing-ithildin drop-shadow-ithildin' : 'text-ithildin'}`}
    >
      {children}
    </div>
  );
};
