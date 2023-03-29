import React from 'react'
import Logo from "../../Assets/TechnoLogo.png"
import * as IoIcons from "react-icons/io5"
const Header = () => {
  return (
    <div className="header container-lg py-2  text-light">
      <div className="logo-container col-md-2">
        <img src={Logo} className="logo" alt="" />
      </div>
      <div className="header-links col-md-10 justify-content-end">
        <div className="link px-1 d-flex align-items-center">
          <div className="icon-container fs-4 px-2">
            <IoIcons.IoCallSharp />
          </div>
          <div className="header-text text-start">
            <p className="header-main">We are available</p>
            <p className="header-sub">1234567890</p>
          </div>
        </div>
        <div className="link px-1 d-flex align-items-center">
          <div className="icon-container fs-4 px-2">
            <IoIcons.IoLocationSharp />
          </div>
          <div className="header-text text-start">
            <p className="header-main">000 ,iSQUARE Corporater Park,</p>
            <p className="header-sub">Science City Rd, Sola, Gujarat</p>
          </div>
        </div>
        <div className="link px-1 d-flex align-items-center">
          <div className="icon-container fs-4 px-2">
            <IoIcons.IoTimerOutline />
          </div>
          <div className="header-text text-start">
            <p className="header-main">Sunday - Monday</p>
            <p className="header-sub">10:00 am - 06:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;