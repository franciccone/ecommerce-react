import React from 'react';
import './Footer.scss';
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si';

const Footer = () => {
    return (

            <footer className="footer container-fluid">

                <ul className="social-media">
                    <a className="sm-icon" href="https://github.com/franciccone"><SiFacebook/></a>
                    <a className="sm-icon" href="https://github.com/franciccone"><SiInstagram/></a>
                    <a className="sm-icon" href="https://github.com/franciccone"><SiTwitter/></a>
                    <a className="sm-icon" href="https://github.com/franciccone"><SiYoutube/></a>
                </ul>

            </footer>

    );

};

export default Footer;