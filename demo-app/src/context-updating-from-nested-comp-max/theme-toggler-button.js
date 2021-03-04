import React from 'react';
import { ThemeContext } from './theme-context';

export default function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {/* {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button> */}
      {(contxt) => (
        <button
          onClick={contxt.toggleTheme}
          style={{ backgroundColor: contxt.theme.background }}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}


