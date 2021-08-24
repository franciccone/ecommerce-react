import React from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

export const ItemDetail = ({region, name, desc, picture, price}) => {

    return (
        <div className="city-container">
            <img className="city-img" src={picture} alt={name}/>
            <div className="city-box">
                <h2 className="city-name">{name}</h2>
                <p className="city-price">Price: {price} €</p>
            </div>
            <p className="city-desc">{desc}</p>

            <Link to={`/regions/${region}`} className="city-btn">Back</Link>
        </div>
    )
}