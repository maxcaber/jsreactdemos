import React from 'react';

const products = ['apples', 'bananas', 'oranges', 'blueberries', 'strawberries'];

export const AppContext = React.createContext({
    count: 0,
    items: [],
    itemIndex: -1,
    increment: () => { },
    decrement: () => { },
    addItem: () => { },
    deleteItem: () => { },
    selectItem: (itemIndex) => { },
    updateItem: (item, itemIndex) => { },
});

export default class AppProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            items: [],
            itemIndex: -1,
            increment: this.increment,
            decrement: this.decrement,
            addItem: this.addItem,
            deleteItem: this.deleteItem,
            selectItem: this.selectItem,
            updateItem: this.updateItem,
        }
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    addItem = () => {
        const newItem = { description: products[Math.floor(Math.random() * 5)], quantity: 1, price: Math.floor(Math.random() * 101) };
        const itemsCopy = [...this.state.items];//makes new copy 
        itemsCopy.push(newItem);
        this.setState({ items: itemsCopy })
    }

    deleteItem = () => {
        const itemsCopy = [...this.state.items];//makes new copy 
        itemsCopy.splice( this.state.itemIndex, 1);
        this.setState({ items: itemsCopy , itemIndex: -1 })
    }

    selectItem = (index) => {
        this.setState({ itemIndex: index });
    }

    updateItem = (item) => {
        const itemsCopy = [...this.state.items];
        itemsCopy[this.state.itemIndex] = item;
        this.setState({ items: itemsCopy });
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

