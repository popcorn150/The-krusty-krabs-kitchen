import React from 'react'
import "./Cart.css"
import Button from '../Button/Button';

function Cart({ cartItems }) {
    const totalPrice = cartItems.reduce((a, c) => {
        const price = parseFloat(c.price);
        const quantity = parseInt(c.quantity, 10);

        if (isNaN(price) || isNaN(quantity)) {
            return a;
        }
        return a + price * quantity;
    }, 0);

    return (
        <div className='cart__container'>
            {cartItems.length === 0 ? "" : ""}
            <br /> <span className='cart__txt'>Total Coin Earned: ${totalPrice.toFixed(2)}</span>
            <Button className='cart__btn' title={`${cartItems.length === 0 ? "Place Order !" : "Checkout"} `}
                type={"checkout"}
                disabled={cartItems.length === 0 ? true : false}
            />
        </div>
    );
}

export default Cart;