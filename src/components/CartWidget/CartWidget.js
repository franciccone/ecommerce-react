import React from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartWidget = () => {

    return (
        <div className="cart-widget">
            <AiOutlineShoppingCart className="cart-icon"/>
            <span className="cart-span">0</span>
        </div>
    );

}

export default CartWidget;