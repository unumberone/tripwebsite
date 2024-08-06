import React from "react";
import './offers.css'
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import img11 from "../../Asset/img11.jpg";
import img12 from "../../Asset/img12.jpg";
import img13 from "../../Asset/img13.jpg";

const Offers = [
    {
        id: 1,
        imgSrc: img11,
        destTitle: 'Vạn Lý Trường Thành',
        location: 'Trung Quốc',
        price: '4.500.000 VND'
    },
    {
        id: 2,
        imgSrc: img12,
        destTitle: 'Tháp Eiffel',
        location: 'Pháp',
        price: '6.000.000 VND'
    },
    {
        id: 3,
        imgSrc: img13,
        destTitle: 'Tượng Nữ Thần Tự Do',
        location: 'Mỹ',
        price: '7.000.000 VND'
    },
];

const Offer = () => {
    return (
       <section className="offer container section">
        <div className="secContainer">
            
            <div className="secIntro">
                <h2 className="secTitle">
                    Ưu Đãi Đặc Biệt
                </h2>
                <p>
                    Từ các thành phố lịch sử đến những kỳ quan thiên nhiên, hãy đến xem những điều tuyệt vời nhất của thế giới!
                </p>
            </div>

            <div className="mainContent grid">

                {
                    Offers.map(({ id, imgSrc, destTitle, location, price }) => {
                        return (
                            <div key={id} className="singleOffer"> 
                                <div className="destImage">
                                    <img src={imgSrc} alt={destTitle} />

                                    <span className="discount">Giảm 30%</span>
                                </div>
                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>{price}</h4>
                                        <span className="status">
                                            Cho Thuê
                                        </span>
                                    </div>
                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                            <MdKingBed className='icon'/>
                                            <small>2 Giường</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdBathtub className='icon'/>
                                            <small>1 Phòng Tắm</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <FaWifi className='icon'/>
                                            <small>Wifi miễn phí</small>
                                        </div>
                                        <div className="singleAmenity flex">
                                            <MdAirportShuttle className='icon'/>
                                            <small>Xe Đưa Đón</small>
                                        </div>
                                    </div>

                                    <div className="location flex">
                                        <MdLocationOn className="icon"/>
                                        <div className="smail">{location}</div>
                                    </div>
                                    <button className="btn flex">
                                        Xem Chi Tiết
                                        <BsArrowRightShort color="white" className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
       </section>
    )
}

export default Offer;
