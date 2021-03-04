import React, { useState } from 'react';
import logo from './Capture.PNG';

const Cat = ({ mouse }) => {
    return (
        <img src={logo} style={{ position: 'absolute', left: mouse.x - 50, top: mouse.y - 50, width: 200, height: 175 }} />
    );
}

const Mouse = ({chidren}) => {
    const [state, setState] = useState({ x: 200, y: 200 });

    const handleMouseMove = (event) => {
        setState({ x: event.clientX, y: event.clientY });
    }

    return (
        <div style={{ height: '100vh', cursor: 'none' }} onMouseMove={handleMouseMove}>
            {chidren(state)}
        </div>
    );

}

export default function MouseTrackerChildren(){
        return (
            <div>
                <Mouse chidren={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
}