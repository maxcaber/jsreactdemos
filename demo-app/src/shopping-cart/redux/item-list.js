import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './item-form';

const rowStyle = {
    padding: 2,
    width: 500,
    display: 'flex', justifyContent: 'space-arround',
    boxSizing: 'border-box'
}

const ItemList = (props) => {
    const addItem = () => {
        props.dispatch({ type: 'ADDITEM' });
    }

    const selectItem = (index) => {
        props.dispatch({ type: 'SELECTITEM', itemIndex: index });
    }

    const getRowStyle = (i) => {
        return {
            ...rowStyle,
            background: props.itemIndex === i ? 'red' : ''
        }
    }

    return (
        <div style={{ minHeight: 175, width: 520, padding: 10, border: '#ccc 2px solid' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>Item List</h2>
                <button onClick={addItem}>Add New Item</button>
            </div>
            {props.items.length === 0 ? <div>Your cart is empty...</div>
                :
                <>
                    <ItemRowHeader />
                    {
                        props.items.map((item, i) =>
                            <div style={getRowStyle(i)} key={i} onClick={() => selectItem(i)}>
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




const mapStateToProps = state => ({ items: state.items, itemIndex: state.itemIndex });


export default connect(mapStateToProps)(ItemList);