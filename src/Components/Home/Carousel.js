import React from 'react'
import CarouselButton from "../../Utils/CarouselButton"
import CommonButton from "../../Utils/CommonButton"
import ConsultancyServices from "./ConsultancyServices";

import Header from "./Header";
import Navbar from "./Navbar";

import banner_1 from "../../Assets/banner_img-1.png"
import banner_2 from "../../Assets/banner_img-2.png"
import banner_3 from "../../Assets/banner_img-3.png"

import "../../Styles/styleConstants.css"

import *  as HiIcons from "react-icons/hi"

const Carousel = () => {
    return (
        <div className="mask jumbotron">
            <div className="title d-flex w-100 flex-column justify-content-end">
                <Header />
                <hr />
                <Navbar />
            </div>
            <div className="carousel-content w-100">
                <div className="main-content d-flex text-light text-break text-start">
                    <div className="main-text container flex-column">
                        <h3>Preparing For Your</h3>
                        <h1 className="fw-bolder">Success IT Solutions</h1>
                        <p>We have 25 years of experience in IT business. Professional it solutions for your business must <br /> explain to you how all this mistaken idea of denouncing pleasure and praising pain</p>
                        <CommonButton className="common-btn pink-bg me-3" text="Consultancy" />
                        <CommonButton className="common-btn" text="learn more" />
                    </div>
                    <div className="carousel-button d-flex align-self-end flex-row col-auto">
                        <CarouselButton
                            className="carousel-btn"
                            target="#carouselExampleDark"
                            slide="prev"
                            data-bs-slide="next"
                            text={<HiIcons.HiChevronLeft />}
                        />
                        <CarouselButton
                            className="carousel-btn"
                            target="#carouselExampleDark"
                            slide="next"
                            data-bs-slide="next"
                            text={<HiIcons.HiChevronRight />}
                        />
                    </div>
                </div>
            </div>
            <div id="carouselExampleDark" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={banner_1} className="w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={banner_2} className="w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={banner_3} className="w-100" alt="..." />
                    </div>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                <ConsultancyServices />
            </div>
        </div>
    )
}

export default Carousel;