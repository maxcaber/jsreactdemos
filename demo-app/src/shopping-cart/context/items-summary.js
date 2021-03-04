import React from 'react';
import { useContext } from 'react';
import { AppContext } from './app-provider';


export default function ItemsSummary(){

    const appContext = useContext(AppContext);

     const getNumber= (x) =>{
        var parsed = Number.parseInt(x, 10);
        if (Number.isNaN(parsed)) {
          return 0;
        }
        return parsed;
      }

        //  console.log('in CartSummary', appContext.items);
        const total = appContext.items.reduce((cumulator , item) => cumulator + (getNumber(item.price) * item.quantity), 0);
        const tax = total * .08;
        const totalDue = total + tax;
        return (
            <div>
                <h3>Summary</h3>
                <div>
                    <div>Item Count: {appContext.items.length}</div>
                    <div>Total: {total.toFixed(2)}</div>
                    <div>Tax: {tax.toFixed(2)}</div>
                    <div>Total Due: {totalDue.toFixed(2)}</div>
                </div>
            </div>
        )
    
}

