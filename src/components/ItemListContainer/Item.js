import React from 'react'

export const Item = ( {img, name, desc, price} ) => {
    return (
            <div className="card">
                <img src={img} alt={name}/>
                <h3>{name}</h3>
                <p>{desc}</p>
                <p>{price}</p>
            </div>
    )
}