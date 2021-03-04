import React from 'react';
import { connect } from 'react-redux';

class ItemsSummary extends React.Component {
     getNumber(x) {
        var parsed = Number.parseInt(x, 10);
        if (Number.isNaN(parsed)) {
          return 0;
        }
        return parsed;
      }
    render() {
        //  console.log('in CartSummary', this.props.items);
        const total = this.props.items.reduce((cumulator , item) => cumulator + (this.getNumber(item.price) * item.quantity), 0);
        const tax = total * .08;
        const totalDue = total + tax;
        return (
            <div>
                <h3>Summary</h3>
                <div>
                    <div>Item Count: {this.props.items.length}</div>
                    <div>Total: {total.toFixed(2)}</div>
                    <div>Tax: {tax.toFixed(2)}</div>
                    <div>Total Due: {totalDue.toFixed(2)}</div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => ({ items: state.items });


export default connect(mapStateToProps)(ItemsSummary);