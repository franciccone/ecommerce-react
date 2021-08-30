import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsFillTrashFill } from 'react-icons/bs';
import './CartScreen.scss';

export const CartScreen = () => {

    const {cart, deleteFromCart, emptyCart} = useContext(CartContext);

    return (
        <section className="cart-screen-container">
            <h1 className="cart-screen-title">Your buy</h1>

            {cart.map(city => (
                <div className="cart-screen-box" key={city.id}>
                    <h3 className="cart-screen-name">{city.name}</h3>
                    <p className="cart-screen-text">Quantity: {city.quantity}</p>
                    <p className="cart-screen-text">Price: {city.price * city.quantity}</p>
                    <BsFillTrashFill onClick={() => deleteFromCart(city.id)} className="cart-screen-trash"/>
                </div>
            ))}

            <hr/>

            <button className="btn btn-danger" onClick={emptyCart}>Empty cart</button>
        </section>
    );
};

export default CartScreen;