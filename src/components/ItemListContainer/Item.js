import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

export const Item = ( {id, img, name, desc, price} ) => {
    return (
            <div className="card">
                <img src={img} alt={name} className="card-img"/>
                <div className="card-text">
                    <h3 className="card-name">{name}</h3>
                    <p className="card-desc">{desc}</p>
                    <p className="card-price">{price} €</p>
                    <Link to={`/detail/${id}`} className="card-btn">Book Now</Link>
                </div>
            </div>
    )
}