import React from 'react';
import './Slider.css';
import ImgLondon from "../../img/sliderlondon.jpg";
import ImgGuide from "../../img/sliderguide.jpg";
import ImgPostcard from "../../img/sliderpostcard.jpg";

export const Slider = ( ) => {
    
    return (
        <section className="container">
            <div className="container-slider">
                <div className="slide">
                    <img className="slide-img" src={ImgLondon} alt="London Big Ben"/>
                    <div className="slide-text">
                        <h1>Local guides for every budget</h1>
                    </div>
                </div>
                <div className="slide">
                    <img className="slide-img" src={ImgGuide} alt="Guide with tourists"/>
                    <div className="slide-text">
                        <h1>Local guides for every budget</h1>
                    </div>
                </div>
                <div className="slide">
                    <img className="slide-img" src={ImgPostcard} alt="Munich Postcard"/>
                    <div className="slide-text">
                        <h1>Local guides for every budget</h1>
                    </div>
                </div>
                <div>
                    Controles
                </div>
            </div>
        </section>
    );
};

export default Slider;