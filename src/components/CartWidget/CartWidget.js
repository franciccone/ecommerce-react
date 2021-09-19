import React, { useContext } from 'react';
import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {cartQuantity, cart} = useContext(CartContext);

    return (
        <Link to="/cart">
            <div className="cart-widget">
                <AiOutlineShoppingCart className="cart-icon"/>
                {
                    /* Span is not shown if the cart is empty */
                    cart >= 0 ? <span></span>
                    : <span className="cart-span">{cartQuantity()}</span>
                }
            </div>
        </Link>
    );

};

export default CartWidget;