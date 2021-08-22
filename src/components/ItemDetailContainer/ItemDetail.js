import React from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

export const ItemDetail = ({region, id, name, desc, img, price}) => {


    return (
        <div>
            <h2>{name}</h2>
            <p>Price: {price} €</p>
            <img src={img} alt={name}/>
            <p>{desc}</p>


            <Link to={`/regions/${region}`} className="card-btn">Back</Link>
        </div>
    )
}