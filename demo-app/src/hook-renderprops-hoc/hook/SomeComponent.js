import React from 'react';
import useSomeData from './useSomeData';

const SomeComponent = (props) => {
    const { someData, loading, error } = useSomeData();
    
    return (
        <>
            {loading && <div>{'Loading...'}</div>}
            {!loading && error && <div>{`Error: ${error}`}</div>}
            {!loading && !error && someData && <div>
                {
                    someData.map((x,i) => <div key={i}>{x.name}</div>)
                }
            </div>}
        </>
    );
};

export default SomeComponent;