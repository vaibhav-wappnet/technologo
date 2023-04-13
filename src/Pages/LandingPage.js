import React from 'react'
import Home from "../Components/Home/index"
import About from "../Components/About/index"
import ServicePage from "../Components/Services/index"
import ProjectInfo from "../Components/Project-Info/index"
import ImageSlider from "../Components/Image-Slider/index"
import Contact from "../Components/Contact/index"
// import PageNotFound from "../Pages/PageNotFound"

const LandingPage = () => {
    return (
        <>
            <Home />
            <About />
            <ServicePage />
            <ProjectInfo />
            <ImageSlider />
            <Contact />
        </>
    )
}

export default LandingPage;