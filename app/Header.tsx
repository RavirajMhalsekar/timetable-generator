// HeaderSection.tsx
import React, { FC } from 'react';

interface HeaderProps {
  header: string;
}

const Header: FC<HeaderProps> = ({ header }) => {
  return (
    <div className="bg-white mx-auto text-left p-3 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold tracking-tight text-indigo-800 sm:text-4xl">
        {header}
      </h2>
    </div>
  );
};

export default Header;
