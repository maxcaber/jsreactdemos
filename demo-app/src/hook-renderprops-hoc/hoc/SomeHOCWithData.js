import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SomeComponent = ({ someData, loading, error }) => (
    <React.Fragment>
        {loading && <div>{'Loading...'}</div>}
        {!loading && error && <div>{`Error: ${error}`}</div>}
        {!loading && !error && someData && <div>{someData.length}</div>}
    </React.Fragment>
);

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
const initState = { someData: [], loading: true, error: null };

function withGreen(Component) {
    return () => {
        return (
            <div style={{ color: 'green' }}>
                <Component />
            </div>
        );
    }
}

function withSomeData(Component) {
        return () => {
            const [state, setState] = useState(initState);

            (async () => {
                try {
                    await sleep(500);
                    const response = await axios.get('https://country.register.gov.uk/records.json?page-size=5000');
                    const objData = response.data;
                    const data = Object.keys(objData).map((key) => objData[key].item[0]);
                    setState({ ...state, someData: data, loading: false });
                    
                } catch (e) {
                    setState({ ...state, error: e , loading: false });
                }
            })();

            return (
                <div style={{ color: 'blue' }}>
                   <Component  someData={state.someData} loading={state.loading} error={state.error} />
                </div>
            );
        }
    };

    const SomeHOCWithData = withSomeData(SomeComponent);




    export default SomeHOCWithData;