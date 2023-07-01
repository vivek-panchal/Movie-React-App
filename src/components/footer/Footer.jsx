import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import {
    SiLeetcode,
} from "react-icons/si";


import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Discover the world of cinema with Movix. Immerse yourself in a seamless and interactive experience as you explore a vast collection of movies, browse through genres, and stay up-to-date with the latest releases. Sit back, relax, and let the magic of movies unfold right at your fingertips. Lights, camera, Action!
                </div>
                <div className="socialIcons">
                    <a className="icon" href="https://www.linkedin.com/in/vivekpanchal2608/" target="_blank">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a> 
                    <a className="icon" href="https://leetcode.com/vivekpanchal/" target="_blank">
                        <span className="icon">
                            <SiLeetcode />
                        </span>
                    </a> 
                    <a className="icon" href="https://github.com/vivek-panchal" target="_blank">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a> 
                    <a className="icon" href="https://www.instagram.com/vivekpaanchal/" target="_blank">
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </a> 
                   
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
