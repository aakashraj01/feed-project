import { type ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[75px]">
        {children}
      </main>
    </div>
  );
};

