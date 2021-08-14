import React from 'react'
import { Item } from './Item'

export const ItemList = ( {cities = []} ) => {

    return (
        <section className="container">
            <h2>Cities</h2>
            <hr/>
            <div className="row">

                {cities.map( (city) => ( <Item key={city.id} item={...city}/>))}

            </div>
        </section>
    )

}