import React from 'react';
import { connect } from 'react-redux';

 const Counter = (props) => {
  const increment = () => {
    props.dispatch({ type: 'INCREMENT' });
  }

  const decrement = () => {
    props.dispatch({ type: 'DECREMENT'});
  }

    return (
      <div>
        <h2>Counter</h2>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <button style={{padding:5}} onClick={decrement}>-</button>
          <span>{props.count}</span>
          <button style={{padding:5}} onClick={increment}>+</button>
        </div>
      </div>
    )

}

// function mapStateToProps(state) {
//   return {
//     count: state.count
//   };
// }
// const mapStateToProps = state => {return {count:state.count}};
const mapStateToProps = state => ({count:state.count}) ;


export default connect(mapStateToProps)(Counter);