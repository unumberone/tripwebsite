import React, { useState } from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  // State to manage the visibility of the navbar
  const [active, setActive] = useState('navBar');

  // Show navbar
  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  // Remove navbar
  const removeNav = () => {
    setActive('navBar');
  };

  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <div className={active}>
            <ul className="navLists">
              <li className="navItem">
                <a href="#" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Products</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Resources</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Contact</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Blog</a>
              </li>
              <div className="headerBtns">
                <button className="btn loginBtn">
                  <a href="#" className="">Login</a>
                </button>
                <button className="btn loginBtn">
                  <a href="#" className="">Sign Up</a>
                </button>
                <div onClick={removeNav} className="closeNavbar">
                  <AiFillCloseCircle className="icon" />
                </div>
                <div onClick={showNav} className="toggleNavbar">
                  <TbGridDots className="icon" />
                </div>
              </div>
            </ul>
          </div>
          <a href="#" className="logo">
            <h1 className="flex">
              TravelMate <MdTravelExplore className="icon" />
            </h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
