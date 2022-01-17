import React from 'react';

const Cart = ({cart}) => {

        let total = 0;
        for(const product of cart){
            total = total + product.price;
        }
        const shipping =total>0? 15 :0;
        const tax= (total + shipping) * 0.10;
        const grandTotal = total + shipping + tax; 
    return (
        <div>
            <h2>Order summary</h2>
            <h3>Items ordered:{cart.length}</h3>
            <h4>Total:{total}</h4>
            <p>Shipping:{shipping}</p>
            <p>Tax{tax}</p>
            <h2>Grand Total:{grandTotal}</h2>
        </div>
    );
};

export default Cart;