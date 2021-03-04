import React from 'react';
import { useContext } from 'react';
import { AppContext } from './app-provider';

export default function Counter() {

  const appContext = useContext(AppContext);

  return (
    <div>
      <h2>Counter</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button style={{ padding: 5 }} onClick={appContext.decrement}>-</button>
        <span>{appContext.count}</span>
        <button style={{ padding: 5 }} onClick={appContext.increment}>+</button>
      </div>
    </div>
  )

}

