import React from 'react';
import { useContext } from 'react';
import { AppContext } from './app-provider';

const rowStyle = {
    padding: 2,
    width: 500,
    display: 'flex', justifyContent: 'space-arround',
    boxSizing: 'border-box'
}

export default function ItemList() {

    const appContext = useContext(AppContext);

    const getRowStyle = (i) => {
        return {
            ...rowStyle,
            background: appContext.itemIndex === i ? 'red' : ''
        }
    };

    return (
        <div style={{ minHeight: 175, width: 520, padding: 10, border: '#ccc 2px solid' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Item List</h2>
                <button onClick={appContext.addItem}>Add New Item</button>
            </div>
            {appContext.items.length === 0 ? <div>Your cart is empty...</div>
                :
                <>
                    <ItemRowHeader />
                    {
                        appContext.items.map((item, i) =>
                            <div style={getRowStyle(i)} key={i} onClick={() => appContext.selectItem(i)}>
                                <ItemRow key={i} item={item} />
                            </div>)
                    }
                </>
            }
        </div>
    )

}

const ItemRowHeader = () => {
    return (<div style={rowStyle} >
        <div style={{ flex: 2 }} >Description</div>
        <div style={{ width: 75 }} >Price</div>
        <div style={{ width: 75 }} >quantity</div>
    </div>
    )
}

const ItemRow = ({ item }) => {
    return (<div style={{ ...rowStyle, background: '#fff' }} >
        <div style={{ flex: 2, border: '#ccc' }} >{item.description}</div>
        <div style={{ width: 75, border: '#ccc' }} >{item.price} </div>
        <div style={{ width: 75, border: '#ccc' }} >{item.quantity}</div>
    </div>
    )
}


