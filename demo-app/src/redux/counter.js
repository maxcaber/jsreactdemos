import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     count: state.count
//   };
// }
// const mapStateToProps = state => {return {count:state.count}};


// Arrow functions, like function expressions, can be used to return an object literal expression. 
// The only caveat is that the body needs to be wrapped in parentheses, 
// in order to distinguish between a block and an object (both of which use curly brackets).

const mapStateToProps = state => ({count:state.count}) ;


export default connect(mapStateToProps)(Counter);