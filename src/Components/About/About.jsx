import React from "react";
import './about.css';

import img14 from "../../Asset/customer.png";
import img15 from "../../Asset/mountain.png";
import img16 from "../../Asset/climbing.png";
import video from "../../Asset/video.mp4";

const About = () => {
    return (
        <section className="about section">
            <div className="secContainer">
                <div className="title">
                    Why hikking?
                </div>
                <div className="mainContent container grid">
                <div className="singleItem">
                        <img src={img14} alt="Image Name" />
                        <h3>1000+ Customers</h3>
                        <p>Research shows that a chance to break away from the normal 
                           rhythms of daily life reduces stress and improves health and well-being.
                        </p>
                    </div>
                    <div className="singleItem">
                        <img src={img15} alt="Image Name" />
                        <h3>100+ Mountain</h3>
                        <p>Research shows that a chance to break away from the normal 
                           rhythms of daily life reduces stress and improves health and well-being.
                        </p>
                    </div>
                    <div className="singleItem">
                        <img src={img16} alt="Image Name" />
                        <h3>2000+ Hikking</h3>
                        <p>Research shows that a chance to break away from the normal 
                           rhythms of daily life reduces stress and improves health and well-being.
                        </p>
                    </div>
                </div>
                <div className="videoCard">
            <div className="cardContent">
                <div className="cardText">
                    <h2>Wonderful House Experience There!</h2>
                    <p>The Adventure subranking is based on an equally weighted average of scores from five countries.</p>
                </div>

                <div className="cardVideo">
                    <video src={video} autoPlay loop muted type="video/mp4"></video>
                </div>
            </div>
        </div>
            </div>
        </section>
    )
}

export default About;
