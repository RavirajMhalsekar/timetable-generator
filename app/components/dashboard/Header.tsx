// HeaderSection.tsx
import React, { FC } from 'react';

interface HeaderProps {
  header: string;
}

const Header: FC<HeaderProps> = ({ header }) => {
  return (
    <div className="bg-white shadow-lg shadow-indigo-200 rounded-xl p-4 ">
    <h1 className="text-indigo-900 font-bold text-3xl">
        {header}
      </h1>
      </div>
  );
};

export default Header;