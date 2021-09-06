import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.scss';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

export const ItemDetail = ({region, id, name, desc, bigdesc, img, picture, price, stock}) => {

    const {addToCart, isInCart} = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        addToCart ({
                id, name, region, desc, img, price, quantity
        });
    };

    return (
        <section className="container-fluid">
            <img className="city-img" src={picture} alt={name}/>
            <div className="city-box container-fluid">
                <h2 className="city-name">{name}</h2>
                <div className="city-ticket-box">
                    <p className="city-price"><RiMoneyDollarBoxLine className="icon-price"/>{price}</p>
                    <ItemCount
                        max={stock}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        add={handleAdd}
                        added={isInCart(id)}
                    />
                </div>
                <p className="city-desc">{bigdesc}</p>
                <div className="back-btn-box">
                    <Link to={`/regions/${region}`} className="city-btn">Back</Link>
                </div>
            </div>
        </section>
    )
};