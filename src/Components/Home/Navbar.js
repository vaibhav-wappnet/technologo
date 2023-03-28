import React from 'react'
import NavbarData from "../../APIs/NavbarData"
import SocialButtons from '../../Utils/SocialButtons'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import * as FaIcons from "react-icons/fa"

const Navbar = () => {
    return (
        <div>
            <div className=" navbar-container px-5">
                <nav className="navbar navbar-expand-lg p-0" aria-label="Offcanvas navbar large">
                    <div className="container-fluid">
                        <div className="offcanvas offcanvas-top h-100" tabIndex="-1" aria-labelledby="offcanvasNavbar2Label" id="offcanvasNavbar2">
                            <div className="offcanvas-header me-2">
                                <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close">
                                </button>
                            </div>
                            <div className="offcanvas-body d-flex align-items-centers justify-content-between">
                                <ul className="navbar-nav nav d-flex mb-2 mb-lg-0 text-uppercase align-items-center">
                                    {NavbarData.map((item) => {
                                        return (
                                            <li key={item.id} className="nav-item mx-2">
                                                <a className="nav-link" href={item.path}>{item.title}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="nav-icons d-flex align-items-center">
                                    <SocialButtons
                                        className="social-buttons"
                                        icon={<FaIcons.FaFacebookF />}
                                    />
                                    <SocialButtons
                                        className="social-buttons"
                                        icon={<FaIcons.FaTwitter />}
                                    />
                                    <SocialButtons
                                        className="social-buttons"
                                        icon={<FaIcons.FaInstagram />}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="navbar-toggler align-self-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;