
import React from 'react';
import useSomeData from './useSomeData';

const SomeOtherComponent = (props) => {
    const { someData, loading, error } = useSomeData();
    
    return (
        <React.Fragment>
            {loading && <div>{'Loading...'}</div>}
            {!loading && error && <div>{`Error: ${error}`}</div>}
            {!loading && !error && someData && <div>
                {
                   someData.length
                }
            </div>}
        </React.Fragment>
    );
};

export default SomeOtherComponent;