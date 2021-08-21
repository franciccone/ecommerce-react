import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({category, id, name, desc, img, price}) => {


    return (
        <div>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <img src={img} alt={name}/>
            <p>{desc}</p>


            <Link to={`/category/${category}`} className="card-btn">Back</Link>
        </div>
    )
}