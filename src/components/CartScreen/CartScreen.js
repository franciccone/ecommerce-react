import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsFillTrashFill } from 'react-icons/bs';
import './CartScreen.scss';

export const CartScreen = () => {

    const {cart, deleteFromCart, emptyCart} = useContext(CartContext);

    return (
        <section>
            <h1>Your buy</h1>

            {cart.map(city => (
                <div key={city.id}>
                    <h3>{city.name}</h3>
                    <p>Quantity: {city.quantity}</p>
                    <p>Price: {city.price * city.quantity}</p>
                    <BsFillTrashFill onClick={() => deleteFromCart(city.id)}/>
                </div>
            ))}

            <hr/>

            <button className="btn btn-danger" onClick={emptyCart}>Empty cart</button>
        </section>
    );
};

export default CartScreen;