import React from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

export const ItemDetail = ({region, name, bigdesc, picture, price}) => {

    return (
        <section className="city-container">
            <img className="city-img" src={picture} alt={name}/>
            <div className="city-box">
                <h2 className="city-name">{name}</h2>
                <p className="city-price"><RiMoneyDollarBoxLine className="icon-price"/> {price} €</p>
                <ItemCount stock={100} initial={1} onAdd={() => console.log('BUY')}/>
                <p className="city-desc">{bigdesc}</p>
                <Link to={`/regions/${region}`} className="city-btn">Back</Link>
            </div>
        </section>
    )
}