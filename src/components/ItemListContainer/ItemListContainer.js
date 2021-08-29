import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestData } from "../../helpers/requestData";
import { ItemList } from "./ItemList";
import { UIContext } from "../../context/UIContext";
import './ItemListContainer.scss';

const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext);
    const { regionId } = useParams();
    const [data, setData] = useState([]);

    
    useEffect( () => {
        setLoading(true)

        requestData()
            .then(res => {
                if (regionId){
                    const filterArray = res.filter(cities => cities.region === regionId)
                    setData(filterArray)
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(() => {setLoading(false)})
    }, [regionId]);
    
    return (
        <>

            {
                loading
                ? <h2 className="loading container">Loading... <div className="loader"></div></h2>
                : <ItemList cities={data}/>
            }

        </>
    );

};

export default ItemListContainer;