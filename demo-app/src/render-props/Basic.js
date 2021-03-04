import React from 'react';

const BlueParent = (props) => {
    return (
        <div style={{ color: 'blue' }}>
            {props.render()}
        </div>
    );
}

const SomeComponent = (props) => {
    return (
        <h2>Hello World</h2>
    );
}

function withRed(Component) {
    return class extends React.Component {
        render() {
            return (
                <div style={{ color: 'red' }}>
                    <Component />
                </div>
            );
        }
    }
}
const SomeRedComponent = withRed(SomeComponent);

function withGreen(Component) {
    return () => {
        return (
            <div style={{ color: 'green' }}>
                <Component />
            </div>
        );
    }
}
const SomeGreenComponent = withGreen(SomeComponent);

export default function Basic() {
    return (
        <>
            <BlueParent render={renderProps => <SomeComponent />} />
            <SomeRedComponent />
            <SomeGreenComponent />
        </>
    );
}