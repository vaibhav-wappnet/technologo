import React from 'react'
import banner_4 from "../../Assets/banner_img-4.png"
import ServiceMenu from './ServiceMenu'

const Jumbotron = () => {
  return (
    <div className="mask jumbotron d-flex flex-column justify-content-center">
      <div data-aos="zoom-in-top" className="service-header w-100 d-flex flex-column justify-content-center">
        <div className="heading d-flex justify-content-center flex-column align-items-center text-uppercase">
          <div className="d-flex align-items-center ">
            <hr />
            <p>our services</p>
            <hr />
          </div>
          <h3>
            Professional Services Provider IT Solutions Agency
          </h3>
        </div>
        <div className="service-content d-flex w-100 justify-content-center">
          <ServiceMenu />
        </div>
      </div>
      <div className="bg-image-service">
        <img src={banner_4} className="w-100 img-fluid" alt=":(" />
      </div>
    </div>
  )
}

export default Jumbotron