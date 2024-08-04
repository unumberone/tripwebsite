import React, { useState } from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

// Chuyển đổi khả năng hiển thị thanh toggle
  const toggleNav = () => {
    setIsNavVisible(prevState => !prevState);
  };

  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className="flex">
              TravelMate <MdTravelExplore className="icon" />
            </h1>
          </a>
        </div>
        <div className="headerBtns">
          <button className="btn loginBtn">
            <a href="#">Login</a>
          </button>
          <button className="btn loginBtn">
            <a href="#">Sign Up</a>
          </button>
          <div onClick={toggleNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </div>
      </div>
      <div className={isNavVisible ? 'navBar active' : 'navBar'}>
        <div onClick={toggleNav} className="closeNavbar">✖</div>
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
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
