import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from "prop-types";

// Create a Context for Theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Persist theme in localStorage
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Apply theme globally
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme); // Persist theme
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
