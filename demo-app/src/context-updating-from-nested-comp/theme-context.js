import React from 'react';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
      height:'25px',
      width:'150px'
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
      height:'25px',
      width:'150px'
    },
  };
  
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export  const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });