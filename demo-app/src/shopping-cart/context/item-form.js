import React from 'react';
import { useContext } from 'react';
import { AppContext } from './app-provider';


export default function ItemForm() {

    const appContext = useContext(AppContext);

    function updateItem(e) {
        const item = appContext.items[appContext.itemIndex];
        const copy = { ...item };
        const name = e.target.name;
        const value = e.target.value;
        console.log('namee', name, 'val', value);
        copy[name] = value;
        appContext.updateItem(copy);
    }

    const item = appContext.items[appContext.itemIndex];
    const lblStyle = { width: 100 };
    const rowStyle = { display: 'flex', width: 300 };
    const borderColor = appContext.itemIndex > 0 ? 'red' : '#ccc';
    return (
        <div style={{ padding: 10, border: 'black 2px solid', borderColor, width: 350, height: 175 }}>
            <h2>Update/Delete Item</h2>
            {appContext.itemIndex >= 0 ?
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, }}>
                    <div style={rowStyle}><div style={lblStyle}>Description:</div>
                        <div><input value={item.description} name='description' onChange={updateItem} /></div></div>
                    <div style={rowStyle}><div style={lblStyle}>Price:</div>
                        <div><input value={item.price} name='price' onChange={updateItem} /></div></div>
                    <div style={rowStyle}><div style={lblStyle}>Quantity:</div>
                        <div><input value={item.quantity} name='quantity' onChange={updateItem} /></div></div>
                    <button onClick={appContext.deleteItem} style={{ marginTop: 10 }}>Delete Item</button>
                </div>
                :
                <div style={{ padding: 10, }}>
                    <p>No item selected.</p>
                </div>
            }
        </div>
    )

}


