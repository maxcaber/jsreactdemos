import React from 'react';
import { render } from 'react-dom';
import Counter from './counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
        <Counter/>
      </Provider>
      )
  }
}
