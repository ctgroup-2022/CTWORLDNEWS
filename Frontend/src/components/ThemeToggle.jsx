import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    >
      {theme === 'dark' ? (
        <BsSun className="text-yellow-400 text-xl" />
      ) : (
        <BsMoon className="text-blue-600 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
