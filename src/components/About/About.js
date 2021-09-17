import React from 'react';
import './About.css';
import ImgAbout from '../../img/guides.jpg';

export const About = ( ) => {

    return (
        <section className="about-container container-fluid">
            <img className="img-fluid" src={ImgAbout} alt="Tourist guides"/>
            <h2 className="about-title text-center">Changing the way of making tourism</h2>
            <article className="about-text">
                <p className="about-p text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <p className="about-p text-center">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <p className="about-p text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <p className="about-p text-center">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </article>
        </section>
    )
}

export default About;