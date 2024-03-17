import { ReactNode } from 'react';

interface TengwarProps {
  children: ReactNode;
}

export const Tengwar: React.FC<TengwarProps> = ({ children }) => (
  <div className="font-mono">{children}</div>
);
