import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from "./ItemList";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from '../../firebase/config'
import './ItemListContainer.scss';

const ItemListContainer = () => {

    const {loading, setLoading} = useContext(UIContext);
    const { regionId } = useParams();
    const [data, setData] = useState([]);

    
    useEffect( () => {
        setLoading(true)

        const db = getFirestore()
        const cities = db.collection('cities')

        if (regionId) {
            const filtered = cities.where('region', '==', regionId)
            filtered.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    console.log(data)
                    setData(data)
                })
                .finally(()=> {
                    setLoading(false)
                })
        } else {
            cities.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    console.log(data)
                    setData(data)
                })
                .finally(()=> {
                    setLoading(false)
                })
        }

    }, [regionId, setLoading])
    //     setLoading(true)

    //     requestData()
    //         .then(res => {
    //             if (regionId){
    //                 const filterArray = res.filter(cities => cities.region === regionId)
    //                 setData(filterArray)
    //             } else {
    //                 setData(res)
    //             }
    //         })
    //         .catch(err => console.log(err))
    //         .finally(() => {setLoading(false)})
    // }, [regionId]);
    
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