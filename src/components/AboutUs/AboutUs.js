import React from 'react'
import './AboutUs.css';

export const AboutUs = ( ) => {

    return (
        <section>
            <h2>Changing the way to making tourism</h2>
            <article>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet</p>
            </article>

            <Link to={`/regions/${region}`} className="card-btn">Back</Link>
        </section>
    )
}