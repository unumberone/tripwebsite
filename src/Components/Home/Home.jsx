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
                    <p className="subTitle">
                        Travel to your favourite city with respectful of the environment!
                    </p>
                </div>

                <div className="homeCard grid">

                    <div className="locationDiv">
                        <label htmlFor="location">Vị trí</label>
                        <input type="text" placeholder="Nhập địa điểm muốn đến...."/>
                    </div>

                    <div className="locationDiv"></div>
                    <div className="distDiv">
                        <label htmlFor="distance">Khoảng cách</label>
                        <input type="text" placeholder="Hà Nội,..."/>
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Khoảng giá</label>
                        <input type="text" placeholder="800.000VND-100.000.000VND"/>
                    </div>
                    <button className="mainBtn">
                        <a href="#" className="mainText">Explore Now</a>
                    </button>
                   </div>

            </div>
        </section>
        
    )
}

export default Home
