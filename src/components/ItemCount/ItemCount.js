import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.scss';

export const ItemCount = ({max, quantity, setQuantity, add, added}) => {

    const handleAdd = () => {
        if (quantity < max) {
            setQuantity(quantity + 1)
        };
    };

    const handleRest = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        };
    };

    return (
        <>
            <div className="button-box container-fluid">
                {
                    added 
                        ? <Link to="/cart" className="finish-btn">Finish the purchease</Link>
                        :
                    
                        <div className="button-box container-fluid">
                            <button className="minus-button" onClick={handleRest}>-</button>
                            <p>{quantity}</p>
                            <button className="plus-button"onClick={handleAdd}>+</button>
                            <button className="add-button" onClick={add}>Add to cart</button>
                        </div>
                }
            </div>
        </>
    );
};