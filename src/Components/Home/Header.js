import React from 'react'
import Logo from "../../Assets/TechnoLogo.png"
const Header = () => {
  return (
    <div className="header px-5 d-flex bg-dark text-light align-items-center justify-content-between">
        <div className="logo-container ">
            <img src={Logo} height="40px" alt="" />
        </div>
        <div className="header-links d-flex flex-row">
            <div className="link-1 px-2">Contact</div>
            <div className="link-2 px-2">Location</div>
            <div className="link-3 px-2">Timing</div>
        </div>
    </div>
  )
}

export default Header;