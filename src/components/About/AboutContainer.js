import React, { useEffect, useState } from 'react';
import { About } from './About';

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
                ? <h2 className="loading container">Loading... <div className="loader"></div></h2>
                : <About/>
            }
        </div>
    )
};

export default AboutContainer;