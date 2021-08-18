import React from 'react';
import './Footer.css';
import { SiFacebook } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';

const Footer = () => {
    return (

            <footer className="footer">

                <ul className="social-media">
                    <a className="sm-icon" href="https://github.com/franciccone"><SiFacebook/></a>
                    <a className="sm-icon" href="https://github.com/franciccone"><SiInstagram/></a>
                    <a className="sm-icon" href="https://github.com/franciccone"><SiTwitter/></a>
                    <a className="sm-icon" href="https://github.com/franciccone"><SiYoutube/></a>
                </ul>

            </footer>

    );

}

export default Footer;