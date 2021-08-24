import React from 'react';
import './About.css';
import ImgAbout from "../../img/guides.jpg";

export const About = ( ) => {

    return (
        <section className="about-container">
            <img className="about-img" src={ImgAbout} alt="Tourist guides"/>
            <h2 className="about-title">Changing the way of making tourism</h2>
            <article className="about-text">
                <p className="about-p">Lorem ipsum dolor sit amet</p>
                <p className="about-p">Lorem ipsum dolor sit amet</p>
                <p className="about-p">Lorem ipsum dolor sit amet</p>
                <p className="about-p">Lorem ipsum dolor sit amet</p>
            </article>
        </section>
    )
}

export default About;