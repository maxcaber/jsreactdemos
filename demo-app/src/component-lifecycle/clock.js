import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = { date: new Date() };//the constructor is the only place to update state directly
    }

    //called when the component is rendered to the DOM for the first time.
    // runs after the component output has been rendered to the DOM.
    componentDidMount() {
        console.log('componentDidMount');
        this.timerID = setInterval(
            () => this.tick(),//note this is part of the class not React's props or state.  It's okay to use this.
            1000
        );
    }

    //called whenever the DOM produced by the component is removed
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        //alt function that takes previous state and current value of props
        // this.setState((state, props) => ({
        //     counter: state.counter + props.increment
        //   }));
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
//https://blog.bitsrc.io/understanding-react-v16-4-new-component-lifecycle-methods-fa7b224efd7d
//UNSAFE_componentWillMount instead use constructor
//UNSAFE_componentWillReceiveProps instead use static getDerivedStateFromProps(props,state) //note static no access to this.
//UNSAFE_componentWillUpdate instead use getSnapshotBeforeUpdate 