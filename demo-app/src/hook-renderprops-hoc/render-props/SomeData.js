import { useState } from 'react';
import axios from 'axios';

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

const initState = { someData: [], loading: true, error: null };

const SomeData2 = ({ children }) => {
    const [state, setState] = useState(initState);
    sleep(500).then(_ => {
        axios.get('https://country.register.gov.uk/records.json?page-size=5000').then(response => {
            const objData = response.data;
            const data = Object.keys(objData).map((key) => objData[key].item[0]);
            setState({ ...state, someData: data, loading: false });
        }).catch(e => {
            setState({ ...state, error: e });
        })
    });

    return (
        <div style={{ color: 'red' }}>{children(state)}</div>
    );
};

const SomeData = ({ children }) => {
    const [state, setState] = useState(initState);

    (async () => {
        try {
            await sleep(500);
            const response = await axios.get('https://country.register.gov.uk/records.json?page-size=5000');
            const objData =  response.data;
            const data = Object.keys(objData).map((key) => objData[key].item[0]);
            setState({ ...state, someData: data, loading: false });
        } catch (e) {
            setState({ ...state, error: e });
        }
    })();

    return (
        <div style={{ color: 'blue' }}>{children(state)}</div>
    );
};

export default SomeData;