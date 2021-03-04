import React from 'react';
import { ThemeContext } from './theme-context';

export default class ThemeButtonContextType extends React.Component {
  render() {
    let c = this.context;
    return(
      <div >
        <button
          onClick={c.toggleTheme}
          style={{ backgroundColor: c.theme.background }}>
          Toggle Theme Context Type
        </button>
      </div>
    )
  }
}
ThemeButtonContextType.contextType = ThemeContext;