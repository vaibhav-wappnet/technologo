import React from 'react'
import NavbarData from "../../APIs/NavbarData"
import SocialButtons from '../../Utils/SocialButtons'

import * as FaIcons from "react-icons/fa"

const Navbar = () => {
    return (
        <div>
            <div className=" navbar-container-fluid px-5">
                <nav className="navbar navbar-expand-lg p-0" aria-label="Offcanvas navbar large">
                    <div className="container-fluid d-flex justify-content-end">
                        <button className="navbar-toggler toggle-button bg-light align-self-end" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-top h-100" tabIndex="-1" aria-labelledby="offcanvasNavbar2Label" id="offcanvasNavbar2">
                            <div className="offcanvas-header me-2">
                                <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close">
                                </button>
                            </div>
                            <div className="offcanvas-body sm-flex-column lg-flex-row justify-content-center align-items-centers justify-content-between">
                                <div className="navbar-nav nav d-flex mb-2 mb-lg-0 text-uppercase align-items-center">
                                    {NavbarData.map((item) => {
                                        return (
                                            <li key={item.id} className="nav-item mx-3">
                                                <a className="nav-link fw-semibold" href={item.path}>{item.title}</a>
                                            </li>
                                        )
                                    })}
                                </div>
                                <div className="nav-icons d-flex justify-content-center lg-flex-row align-items-center">
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
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;