import React from 'react'
import { SliderImages } from "./SliderImages"

export const Slider = ( ) => {

    return (
        <>
        {SliderImages.map((slide, index) => {
            return <img src={slide.image} alt={slide.alt} />
        })}
        </>
    );

};