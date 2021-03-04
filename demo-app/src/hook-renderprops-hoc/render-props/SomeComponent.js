import React from 'react';

const SomeComponent = ({ someData, loading, error }) => {
    console.log('SomeComponentRP', someData, loading, error);
    return (
        <>
            {loading && <div>{'Loading...'}</div>}
            {!loading && error && <div>{`Error: ${error}`}</div>}
            {!loading && !error && someData && <div>{someData.length}</div>}
        </>
    );
}
export default SomeComponent;