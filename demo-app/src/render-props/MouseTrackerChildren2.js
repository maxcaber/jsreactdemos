import React, { useState } from 'react';
import PropTypes from 'prop-types'
import logo from './Capture.PNG';

const Cat = ({ mouse }) => {
    return (
        <img src={logo} style={{ position: 'absolute', left: mouse.x - 50, top: mouse.y - 50, width: 200, height: 175 }} />
    );
}

const Mouse = ({ children }) => {
    const [state, setState] = useState({ x: 200, y: 200 });

    const handleMouseMove = (event) => {
        setState({ x: event.clientX, y: event.clientY });
    }

    return (
        <div style={{ height: '100vh', cursor: 'crosshair' }} onMouseMove={handleMouseMove}>{children(state)}</div>
    );

}

const MouseTrackerChildren2 = (props) => {
    return (
        <div>
            {/* <Mouse children={mouse => (<p>The mouse position is: {mouse.x}, {mouse.y}</p>)}/> */}
            <Mouse>
                {mouse => (
                    <>
                    <p>The mouse position is  {mouse.x}, {mouse.y}</p>
                    <Cat mouse={mouse} />
                    </>
                )}
            </Mouse>
        </div>
    );
}

Mouse.propTypes = {
    children: PropTypes.func.isRequired
};

export default MouseTrackerChildren2;