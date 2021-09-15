import { createContext, useState, useEffect } from 'react';

// Context creation
export const CartContext = createContext();

// Custom Provider

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const addToCart = (city) => {
        setCart([
            ...cart,
            city
        ]);
    };

    const deleteFromCart = (id) => {
        setCart( cart.filter(city => city.id !== id) );
    };

    const cartQuantity = () => {
        return cart.reduce((acc, city) => acc + city.quantity, 0);
    };

    const emptyCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(el => el.id === id);
    };

    const cartTotal = () => {
        return cart.reduce((acc, city) => acc + city.price * city.quantity, 0)
    };

    useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

    return (
        <CartContext.Provider value={{cart, isInCart, addToCart, deleteFromCart, cartQuantity, emptyCart, cartTotal}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;