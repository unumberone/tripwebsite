import React from "react";
import './home.css';

const Home = () => {
    return (
        <section className="home">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">
                        Plan Your Trip With Travel Dot
                    </h1>
                    <p className="subTitle">
                        Travel to your favourite city with respect for the environment!
                    </p>
                    <button className="mainBtn">
                        <a href="#" className="mainText">Explore Now</a>
                    </button>
                </div>


                <div className="homeCard grid">
                    <div className="locationDiv">
                        <label htmlFor="location">Vị trí</label>
                        <input type="text" id="location" placeholder="Nhập địa điểm muốn đến...."/>
                    </div>

                    <div className="distDiv">
                        <label htmlFor="distance">Khoảng cách</label>
                        <input type="text" id="distance" placeholder="Hà Nội"/>
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Khoảng giá</label>
                        <input type="text" id="price" placeholder="800.000VND-10.000.000VND"/>
                    </div>
                    <button className="btn">Search</button>
                </div>
                
            </div>
        </section>
    );
}

export default Home;
