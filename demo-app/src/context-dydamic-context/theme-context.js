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
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );