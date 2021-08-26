import React, { Component } from 'react';
import './BootstrapCarousel.css';
import ImgLondon from "../../img/sliderlondon.jpg";
import ImgGuide from "../../img/sliderguide.jpg";
import ImgPostcard from "../../img/sliderpostcard.jpg";
import Carousel from 'react-bootstrap/Carousel';

export class BootstrapCarousel extends Component {

    render() {  
        return (

            <Carousel className="container-slider">
                <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={ImgLondon}
                    alt="London Big Ben"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={ImgGuide}
                    alt="Tourist guide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100 slide-img"
                    src={ImgPostcard}
                    alt="Munich postcard"
                />
                </Carousel.Item>

            </Carousel>
        );
    };
    
};

export default BootstrapCarousel;