import React from "react";
import "./footer.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div className="secContainer grid">
                <div className="logoDiv">
                    <div className="footerLogo">
                        <a href="/" className="logo flex" aria-label="TravelMate Home">
                            <h1 className="flex"> 
                                <MdOutlineTravelExplore className="icon"/>
                                TravelMate
                            </h1>
                        </a>
                    </div>
                </div>
                <div className="socials flex">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <ImFacebook className="icon"/>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <BsTwitter className="icon"/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <AiFillInstagram className="icon"/>
                    </a>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">
                        Helpful Link
                    </span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">
                        Contact Us!
                    </span>
                    <span className="phone">+84 999 999 99</span>
                    <span className="email">sonnguyen31032003@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
