import React from 'react'
import Home from "../Components/Home/index"
import About from "../Components/About/index"
import ServicePage from "../Components/Services/index"
import ProjectInfo from "../Components/Project-Info/index"
// import PageNotFound from "../Pages/PageNotFound"

const LandingPage = () => {
    return (
        <>
            <Home />
            <About />
            <ServicePage />
            <ProjectInfo />
        </>
    )
}

export default LandingPage;