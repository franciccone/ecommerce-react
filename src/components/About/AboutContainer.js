import React, { useEffect, useState } from 'react';
import { About } from './About';
import { Loader } from '../Loader/Loader';

export const AboutContainer = () => {

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000); 
    }, [])
    
    return (
        <div>
            {loading 
                ? <Loader/>
                : <About/>
            }
        </div>
    )
};

export default AboutContainer;