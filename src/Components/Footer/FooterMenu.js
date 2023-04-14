import React from 'react'
import Logo from "../../Assets/TechnoLogo.png"
import SocialButtons from '../../Utils/SocialButtons'
import CommonButton from '../../Utils/CommonButton'
import * as FaIcons from "react-icons/fa"

const FooterMenu = () => {
    return (
        <div className="container py-4 fs-6 text-light d-flex flex-column flex-lg-row justify-content-evenly">
            <div className="company-details align-items-center mx-2 flex-column col-sm">
                <div className="footer-logo">
                    <img src={Logo} className="mb-3" alt="" />
                </div>
                <div className="company-text text-sm-start">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti sunt quasi asperiores, dolores laudantium veritatis laboriosam, temporibus soluta vero, nobis officia nihil facere distinctio incidunt recusandae odit libero non.</p>
                </div>
            </div>
            <hr />
            <div className="resources mx-2 align-items-center d-flex flex-column text-md-start col-sm">
                <h3>Resources</h3>
                <div className="resources-links d-flex flex-column">
                    <a href="/">Business Resources</a>
                    <a href="/">Pess Release</a>
                    <a href="/">Partners</a>
                    <a href="/">Events</a>
                    <a href="/">Affiliated Program</a>
                </div>
            </div>
            <hr />
            <div className="important mx-2 align-items-center d-flex text-md-start flex-column col-sm">
                <h3>Important Links</h3>
                <div className="important-links d-flex flex-column">
                    <a href="/">About Us</a>
                    <a href="/">Services</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Team</a>
                    <a href="/">Testimonials</a>
                    <a href="/">Contact Us</a>
                </div>
            </div>
            <hr />

            <div className="recent d-flex align-items-center mx-2 text-md-start flex-column col-sm">
                <h3>Recent posts</h3>
                <div className="post-links d-flex flex-column">
                    <a href="/">there are many variations of Passages Lorem Ipsum available</a>
                    <a href="/">there are many variations of Passages Lorem Ipsum available</a>
                    <a href="/">there are many variations of Passages Lorem Ipsum available</a>
                </div>
            </div>
            <hr />

            <div className="socials d-flex align-items-center text-md-start flex-column col-sm">
                <h3>Social Icons</h3>
                <div className="post-links d-flex">
                    <a href="/">
                        <SocialButtons className="footer-btn mx-2 d-flex align-items-center justify-content-center" icon={<FaIcons.FaFacebookF />} />
                    </a>
                    <a href="/">
                        <SocialButtons className="footer-btn mx-2 d-flex align-items-center justify-content-center" icon={<FaIcons.FaInstagram />} />
                    </a>
                    <a href="/">
                        <SocialButtons className="footer-btn mx-2 d-flex align-items-center justify-content-center" icon={<FaIcons.FaLinkedinIn />} />
                    </a>
                    <a href="/">
                        <SocialButtons className="footer-btn mx-2 d-flex align-items-center justify-content-center" icon={<FaIcons.FaTwitter />} />
                    </a>
                </div>
                <div className="search-section d-flex flex-column align-items-start">
                    <input type="search" className="search-bar my-3 py-2 px-4"
                        placeholder="Search"
                        name="search"
                        id="" />
                    <CommonButton className="common-btn fw-semibold text-uppercase" text="submit" />
                </div>
            </div>
        </div>
    )
}

export default FooterMenu;