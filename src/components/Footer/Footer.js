import React from 'react';
import './Footer.css';
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si';

const Footer = () => {
    return (

            <footer className="footer container-fluid">

                <ul className="social-media">
                    <a className="sm-icon" href="https://franciccone.github.io/portfolio/" target="_blank"><SiFacebook/></a>
                    <a className="sm-icon" href="https://franciccone.github.io/portfolio/" target="_blank"><SiInstagram/></a>
                    <a className="sm-icon" href="https://franciccone.github.io/portfolio/" target="_blank"><SiTwitter/></a>
                    <a className="sm-icon" href="https://franciccone.github.io/portfolio/" target="_blank"><SiYoutube/></a>
                </ul>

            </footer>

    );

};

export default Footer;