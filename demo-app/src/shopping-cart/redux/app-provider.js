import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



const initialState = {
  count: 0,
  items:[],
  itemIndex:-1,
};

const products = ['apples','bananas','oranges','blueberries','strawberries'];

function addNewItem(curItems){
  const newItem = {description:products[Math.floor(Math.random() * 5)], quantity: 1 , price: Math.floor(Math.random() * 101)};
  const items = [...curItems];//makes new copy 
  //other ways to copy array: curItems.slice();curItems.map(i => i);JSON.parse(JSON.stringify(curItems));
  items.push(newItem);
  return items;
}

function deleteItem(curItems , i){
  const items = [...curItems];
  items.splice(i,1);
  return items;
}

function updateItem(curItems , item, i){
  const items = [...curItems];
  items[i] = item;
  return items;
}

function reducer(state = initialState, action) {
  console.log('reducer' , action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'ADDITEM':
    {
      return{
        ...state,
        items : addNewItem(state.items),
      }
    }
    case 'DELETEITEM':
    {
      return{
        ...state,
        items : deleteItem(state.items , state.itemIndex),
        itemIndex: -1,
      }
    }
    case 'SELECTITEM':
    {
      return{
        ...state,
        itemIndex:action.itemIndex,
      }
    }
    case 'UPDATEITEM':
    {
      return{
        ...state,
        items : updateItem(state.items , action.item , state.itemIndex),
      }
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default class AppProvider extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}