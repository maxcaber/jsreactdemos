import React from 'react';
import { connect } from 'react-redux';

const ItemForm = (props) => {
    const updateItem = (e) => {
        const item = props.items[props.itemIndex];
        const copy = { ...item };
        const name = e.target.name;
        const value = e.target.value;
        console.log('namee', name, 'val', value);
        copy[name] = value;

        props.dispatch({ type: 'UPDATEITEM', item: copy });
    }

    const deleteItem = () => {
        props.dispatch({ type: 'DELETEITEM' });
    }

    const item = props.items[props.itemIndex];
    const lblStyle = { width: 100 };
    const rowStyle = { display: 'flex', width: 300 };
    const borderColor = props.itemIndex > 0 ? 'red' : '#ccc';
    return (
        <div style={{ padding: 10, border: 'black 2px solid', borderColor, width: 350, height: 175 }}>
            <h2>Update/Delete Item</h2>
            {props.itemIndex >= 0 ?
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, }}>
                    <div style={rowStyle}><div style={lblStyle}>Description:</div>
                        <div><input value={item.description} name='description' onChange={updateItem} /></div></div>
                    <div style={rowStyle}><div style={lblStyle}>Price:</div>
                        <div><input value={item.price} name='price' onChange={updateItem} /></div></div>
                    <div style={rowStyle}><div style={lblStyle}>Quantity:</div>
                        <div><input value={item.quantity} name='quantity' onChange={updateItem} /></div></div>
                    <button onClick={deleteItem} style={{ marginTop: 10 }}>Delete Item</button>
                </div>
                :
                <div style={{ padding: 10, }}>
                    <p>No item selected.</p>
                </div>
            }
        </div>

    )

}

const mapStateToProps = state => ({ items: state.items, itemIndex: state.itemIndex });

export default connect(mapStateToProps)(ItemForm);