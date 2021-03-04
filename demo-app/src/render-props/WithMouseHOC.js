import React, { useState } from 'react';
import logo from './Capture.PNG';

const Cat = ({ mouse }) => {
    return (
        <img src={logo} style={{ position: 'absolute', left: mouse.x - 50, top: mouse.y - 50, width: 200, height: 175 }} />
    );
}

const Mouse = ({ render }) => {
    const [state, setState] = useState({ x: 200, y: 200 });

    const handleMouseMove = (event) => {
        setState({ x: event.clientX, y: event.clientY });
    }

    return (
        <div style={{ height: '100vh', cursor: 'none' }} onMouseMove={handleMouseMove}>
            {render(state)}
        </div>
    );

}

function withMouse(Component) {
    return class extends React.Component {
        render() {
            return (
                <Mouse render={mouse => (
                    <Component {...this.props} mouse={mouse} />
                )} />
            );
        }
    }
}

const CatWithMouse = withMouse(Cat);

export default function WithMouseHOC() {
    return (
        <div>
            <CatWithMouse />
        </div>
    );
}