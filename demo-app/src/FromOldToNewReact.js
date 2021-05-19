import React, { useState, useEffect } from 'react';
import { getCube } from './ts-functions';

export default class FromOldToNewReact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>The cube of 3 is {getCube(3)} and js can call a ts function.</div>
                {/* calling a js function that returns JSX. Available since React V1*/}
                {showFormattedMessage('Hello world')}
                {/* Same as above but as a component. Available since React V1 */}
                <FormattedMessageComponent msg='Hello Wrold' />
                {/* Hooks allow function components to maintain state.  THIS IS NEW as of V16 */}
                <AFunctionComponentWithState />
            </div>
        )
    }
}

function showFormattedMessage(msg) {
    return (
        <div style={{ fontSize: 25, color: '#069' }}>{msg}</div>
    );
}

function FormattedMessageComponent(props) {
    return (
        <div style={{ fontSize: 25, color: 'green' }}>{props.msg}</div>
    );
}

function AFunctionComponentWithState(props) {
    const [x, setX] = useState(0);

    // useEffect(()=>{
    //     // This optional single hook replaces componentWillMount, componentDidMount, componentWillReceiveProps
    //     // and all other confusing life cycle functions of class components.
    // });
     
    return (
        <div>
            <button onClick={() => setX(x + 1)} >Click Me</button>
            You have clicked {x} times.
        </div>
    );
}