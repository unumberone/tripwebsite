import React from "react";
import './popular.css';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import a1 from '../../Asset/a1.jpg';
import a2 from '../../Asset/a2.jpg';
import a3 from '../../Asset/a3.jpg';
import a4 from '../../Asset/a4.jpg';

const Data = [
  { 
    id: 1,
    imgSrc: a1,
    destTitle: 'Paris',
    location: 'France',
    grade: 'Cultural',
  },

  { 
    id: 2,
    imgSrc: a2,
    destTitle: 'Tokyo',
    location: 'Japan',
    grade: 'Modern',
  },

  { 
    id: 3,
    imgSrc: a3,
    destTitle: 'New York',
    location: 'USA',
    grade: 'Urban',
  },

  { 
    id: 4,
    imgSrc: a4,
    destTitle: 'Cairo',
    location: 'Egypt',
    grade: 'Historical',
  }
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world!
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>
        <div className="mainContent grid">
          {
            Data.map (({id, imgSrc, destTitle, location, grade}) => {
              return (
                <div key={id} className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt={destTitle} />
                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>
                        Lorem ipsum dolor sit amet
                      </p>
                      <BsArrowRightShort className="icon rightIcon" />
                    </div>
                  </div>
                  <div className="destFooter">
                    <div className="number">01</div>
                    <div className="destText flex">
                      <h6>{destTitle}</h6>
                      <span className="flex">
                        <BsDot className="icon" />
                        Dot
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Popular;
