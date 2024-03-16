import { ReactNode } from 'react';
import { IthildinViewState } from './IthildinViewState';

interface IthildinProps {
  viewState: IthildinViewState;
  children: ReactNode;
}

export const Ithildin: React.FC<IthildinProps> = ({ children, viewState }) => {
  return <div>{children}</div>;
};
