import React from "react";
import './home.css'
 
const Home = () => {
    return (
        <section className="home">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">
                        Plan Your Trip With Travel Dot
                    </h1>
                    <p className="subTitlte">
                        Travel to your favourite city with respectful of the environment!
                    </p>
                    <button className="btn">
                        <a href="#">Explore Now</a>
                    </button>
                </div>
            </div>
        </section>
        
    )
}

export default Home
