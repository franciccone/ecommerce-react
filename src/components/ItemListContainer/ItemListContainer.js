import React, { useEffect, useState } from 'react'
import { requestData } from "../../helpers/resquestData"
import { ItemList } from "./ItemList"
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    
    useEffect( () => {
        setLoading(true)

        requestData()
            .then(res => { setData(res) })
            .catch(err => console.log(err))
            .finally(() => {setLoading(false)})
    }, [])
    
    return (
        <>

            {
                loading
                ? <h2 className="loading">Loading... <div className="loader"></div></h2>
                : <ItemList cities={data}/>
            }

        </>
    );

}

export default ItemListContainer;