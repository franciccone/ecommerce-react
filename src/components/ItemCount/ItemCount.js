import React, { useState, useEffect } from 'react';
import './ItemCount.css';

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    //estado para deshabilitar los botones del ItemCount
    const [isDisabled, setIsDisabled] = useState({ decrease: false, add: false });

    //uso de useEffect para habilitar/deshabilitar los botones de + y -
    useEffect(() => {
        count === initial && setIsDisabled({ ...isDisabled, decrease: true });
        count === stock && setIsDisabled({ ...isDisabled, add: true });

        count > initial &&
        count < stock &&
        setIsDisabled({ decrease: false, add: false });
    }, [count]);

    const decreaseCount = () => {
        count > initial && setCount(count - 1);
    };

    const addCount = () => {
        count < stock && setCount(count + 1);
    };

    return (
            <div>
                <button className="minus-button" onClick={decreaseCount} disabled={isDisabled.decrease}>
                    -
                </button>
                    {count}
                <button className="plus-button" onClick={addCount} disabled={isDisabled.add}>
                    +
                </button>
                <br />
                <button className="add-button" onClick={onAdd}>Agregar al carrito</button>
            </div>
        );
};