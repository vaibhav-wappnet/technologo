import React from 'react'
import CarouselButton from "../../Utils/CarouselButton"
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
                <CarouselButton
                    className="carousel-btn btn-sm-primary"
                    target="#carouselExampleDark"
                    slide="prev"
                    data-bs-slide="next"
                    text={<HiIcons.HiChevronLeft />}
                />
                <CarouselButton
                    className={"carousel-btn"}
                    target="#carouselExampleDark"
                    slide="next"
                    data-bs-slide="next"
                    text={<HiIcons.HiChevronRight />}
                />
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
        </div>
    )
}

export default Carousel;