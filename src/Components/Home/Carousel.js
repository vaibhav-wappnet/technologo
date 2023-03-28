import React from 'react'
import Button from "../../Utils/Button"

import banner_img from "../../Assets/banner_img.png"

import "../../Styles/styleConstants.css"

import *  as HiIcons from "react-icons/hi"

const Carousel = () => {
    return (
        <div className="container-fluid z-index-3">
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="" src={banner_img} alt="lol" />
                    </div>
                    <div className="carousel-item">
                        <img className="" src={banner_img} alt="lol" />
                    </div>
                    <div className="carousel-item">
                        <img className="" src={banner_img} alt="lol" />
                    </div>
                </div>
                <div className="carousel-text d-flex flex-row justify-content-between">
                    <div className="description d-flex flex-column">
                        <h3>Preparing for your</h3>
                        <h1>Success IT Solutions</h1>
                        <p>We have 25 years of experience in IT business. Professional IT solutions for your business must explain to you how all this mistaken idea of denouncing pleasure and praising pain</p>
                    </div>
                    <div className="carousel-buttons d-flex">
                        <Button
                            className="carousel-btn"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                            text={<HiIcons.HiChevronLeft />}
                        />
                        <Button
                            className="carousel-btn"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev" text={<HiIcons.HiChevronRight />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;