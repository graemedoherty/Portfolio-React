import React, { createContext, useState } from 'react';
import themes from '../../styles';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.custom); // Initial theme

  const toggleTheme = (themeName) => {
    // Update theme based on themeName
    switch (themeName) {
      case 'Light':
        setTheme(themes.light);
        break;
      case 'Dark':
        setTheme(themes.dark);
        break;
      case 'Custom':
        setTheme(themes.custom);
        break;
      default:
        setTheme(themes.custom); // Default to light theme
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
