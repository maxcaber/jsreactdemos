import React from 'react';

function setWidthColorAndBackground(w, c, b) {
    return (WrappedComponent) => {
        // And return another component
        class HOC extends React.Component {
            render() {
                return (<div style={{ background: b, width: w, color: c }}>
                    <WrappedComponent />
                </div>);
            }
        }
        return HOC;
    };
}

var MyColoredComp = setWidthColorAndBackground(1000, 'red', '#ccc')(DemoComp);
export default function HocDemo() {
    return (
        <MyColoredComp />
    );
}

function DemoComp(props) {
    return (
        <div>Hello</div>
    )
}