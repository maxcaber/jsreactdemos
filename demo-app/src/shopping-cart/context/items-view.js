import React from 'react';
import ItemList from './item-list';
import ItemForm from './item-form';



const  ItemsView = () =>
    (
        <div>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-around', }}>
                    <div>
                        <ItemList />
                    </div>
                    <div>
                        <ItemForm />
                    </div>
                </div>
            </div>
        </div>
    );

 export default ItemsView;