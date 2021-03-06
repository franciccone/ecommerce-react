import React from 'react';
import { Item } from './Item';
import './ItemList.css';

export const ItemList = ( {cities = []} ) => {

    return (
        <section className="container container-fluid">
            <h2 className="container-title">Found us here</h2>
            <hr/>
            <div className="row">

                {cities.map( (city) => <Item key={city.id} {...city}/> )}

            </div>
        </section>
    )

};

export default ItemList;