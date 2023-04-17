import React, { useEffect } from 'react'
import Home from "../Components/Home/index"
import About from "../Components/About/index"
import ServicePage from "../Components/Services/index"
import ProjectInfo from "../Components/Project-Info/index"
import ImageSlider from "../Components/Image-Slider/index"
import Contact from "../Components/Contact/index"
import BrandLogo from "../Components/Brand-Logo/index"
import Footer from "../Components/Footer/Footer"
import PageNotFound from "../Pages/PageNotFound"

import AOS from 'aos';
import "aos/dist/aos.css";

const LandingPage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
        })
    }, [])

    return (
        <>
            <Home />
            <About />
            <ServicePage />
            <ProjectInfo />
            <ImageSlider />
            <Contact />
            <BrandLogo />
            <Footer />
        </>
    )
}

export default LandingPage;