import { createContext, useState } from "react";

// Context creation
export const CartContext = createContext();

// Custom Provider

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

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
        return cart.some(el => el.id == id);
    };

    return (
        <CartContext.Provider value={{cart, isInCart, addToCart, deleteFromCart, cartQuantity, emptyCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;