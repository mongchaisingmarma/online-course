import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((sum, course) => sum + course.price, 0)
    return (
        <div>
            <p>Total Price : {totalPrice}</p>
        </div>
    );
};

export default Cart;