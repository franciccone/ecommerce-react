import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CartScreen.css';

export const CartScreen = () => {

    const {cart, deleteFromCart, emptyCart} = useContext(CartContext);

    return (
        <>
        { cart >= 0 ? (
                        // If the cart is empty, this section is shown
                        <section className="cart-screen-container">

                        <div className="cart-screen-container-empty">
                            <h1 className="cart-screen-title">Your cart is empty!</h1>

                            <hr/>

                            <Link to="/regions">
                            <button className="btn btn-danger btn-empty">Find your city</button>
                            </Link>
                        </div>

                        </section>
                        
                        )   :   (
                        // If the cart has items inside, this section is showed
                        <section className="cart-screen-container">
                            <div>
                                <h1 className="cart-screen-title">Your tours</h1>
                                <div className="cart-screen-container-full">
                                    {cart.map(city => (
                                        <div className="cart-screen-box" key={city.id}>
                                            <img src={city.img} alt={city.name} className="card-screen-img"/>
                                            <h3 className="cart-screen-name">{city.name}</h3>
                                            <p className="cart-screen-text">Quantity: {city.quantity}</p>
                                            <p className="cart-screen-text">Price: {city.price * city.quantity} €</p>
                                            <BsFillTrashFill onClick={() => deleteFromCart(city.id)} className="cart-screen-trash"/>
                                        </div>
                                    ))}
                                </div>

                                <hr/>

                                <div className="btn-box">
                                    <button className="btn btn-danger btn-empty" onClick={emptyCart}>Empty cart</button>
                                    <Link to="/checkout">
                                        <button className="btn btn-danger btn-empty">Finish buy</button>
                                    </Link>
                                </div>

                            </div>
                        </section>)

        }
        </>
        
    );
};

export default CartScreen;