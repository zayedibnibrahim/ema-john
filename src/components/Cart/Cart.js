import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cartCount;
    const total = cart.reduce((total, prd)=> total + prd.price, 0)
    return (
        <div>
            <h1>This cart</h1>
            <h5>Order Summary : {cart.length}</h5>
            <h5>Total Price : {total}</h5>
        </div>
    );
};

export default Cart;