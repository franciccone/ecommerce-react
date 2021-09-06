import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { getFirestore } from '../../firebase/config'
import './ItemDetailContainer.scss';

export const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const cities = db.collection('cities')
        const item = cities.doc(itemId)

        item.get()
            .then((doc) => {
            setItem( {...doc.data(), id: doc.id} )
            })
            .finally(()=> { setLoading(false)})


    }, [itemId, setLoading])
    
    return (
        <div>
            {loading 
                ? <h2 className="loading container">Loading... <div className="loader"></div></h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )
};

export default ItemDetailContainer;