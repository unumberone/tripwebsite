import React from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <div className="navBar">
            <ul className="navLists flex">
                
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

            <div className="headerBtns flex">
                <button className="btn loginBtn">
                    <a href="#" className="">Login</a>
                </button>
                <button className="btn loginBtn">
                    <a href="#" className="">Sign Up</a>
                </button>

                <div className="closeNavbar"><AiFillCloseCircle className = "icon" /></div>
            <div className="toggleNavbar"><TbGridDots className="icon"/></div>
            </div>
            </ul>
          </div>
          <a href="#" className="logo">
            <h1 className="flex">
              {" "}
              <MdTravelExplore className="icon" />
              TravelMate
            </h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
