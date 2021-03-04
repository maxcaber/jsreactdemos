import React from 'react';
import SomeComponent from './hook/SomeComponent';
import SomeOtherComponent from './hook/SomeOtherComponent';
import SomeComponentWithSomeData from './render-props/SomeComponentWithData';
import SomeHOCWithData from './hoc/SomeHOCWithData';


const App = (props) => {

    return (
        // <SomeComponentWithSomeData />
        <SomeHOCWithData />
    );
};

const UseHook = (props) => {
    return (
        <>
            <SomeOtherComponent />
            <SomeComponent />
        </>
    );
}



export default App;