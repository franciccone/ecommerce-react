import React from 'react'
import './Item.css';

export const Item = ( {img, name, desc, price} ) => {
    return (
            <div className="card">
                <img src={img} alt={name} className="card-img"/>
                <div className="card-text">
                    <h3 className="card-name">{name}</h3>
                    <p className="card-desc">{desc}</p>
                    <p className="card-price">{price} €</p>
                </div>
            </div>
    )
}