import React from 'react';
import { render } from 'react-dom';
import Counter from './counter';
import AppProvider from './app-provider';
import ItemView from './items-view';
import ItemsSummary from './items-summary';
import "../styles.css";



const App = () =>
  (
    <AppProvider >
      <Nav />
      <Body />
    </AppProvider>
  );

const Nav = () => (
  <div className="nav">Shopping Cart Redux</div>
);

const Content = ({ children }) => <div className="content">{children}</div>;

const Sidebar = ({ children }) => (
  <div className="sidebar">
    {children}
  </div>
);

const Body = () => (
  <div className="body">
    <Sidebar>
      <Counter />
    </Sidebar>
    <Content>
      <ItemView />
    </Content>
    <Sidebar>
      <ItemsSummary />
    </Sidebar>
  </div>
);

export default App;