import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestData } from '../../helpers/requestData';
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
            setLoading(true)

            requestData()
                .then (res => {
                    setItem(res.find ( city => city.id === parseInt(itemId)) )
                })
                .finally(()=> { setLoading(false)})

    }, [itemId])
    
    return (
        <div>
            {loading 
                ? <h2 className="loading">Loading... <div className="loader"></div></h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}

export default ItemDetailContainer;