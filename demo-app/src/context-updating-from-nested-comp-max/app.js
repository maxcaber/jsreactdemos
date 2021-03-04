import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import ThemeButtonContextType from './theme-toggler-button-contexttype';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myContext: {
        theme: themes.light,
        toggleTheme: this.toggleTheme,
      }
    };
  }

  toggleTheme = () => {
    const myContext = this.state.myContext;
    const newVal = myContext.theme === themes.dark ? themes.light: themes.dark;

    this.setState({myContext: {...myContext,theme:newVal}});
  };


  render() {
    return (
      <ThemeContext.Provider value={this.state.myContext}>
        <p>hello world</p>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
      <br/>
      <ThemeButtonContextType />
    </div>
  );
}
