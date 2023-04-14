import React from 'react'
import location from "../../Assets/location.png"
import message from "../../Assets/message.png"
import call from "../../Assets/call.png"

const FooterLinks = () => {
    return (
        <div className="footer-links my-4 text-light my-5 rounded-2 d-flex container justify-content-between">
            <div className="container d-flex flex-column flex-md-row justify-content-evenly my-3">
                <a href="/" className="d-flex align-items-center my-2">
                    <div className="footer-icon-container mx-2">
                        <img src={location} className="" height="50px" alt="" />
                    </div>
                    <div className="link-text text-start">
                        <h3>Visit Us</h3>
                        <h6>Street City,State,Country</h6>
                    </div>
                </a>
                <a href="/" className="d-flex align-items-center my-2">
                    <div className="footer-icon-container mx-2">
                        <img src={message} height="50px" alt="" />
                    </div>
                    <div className="link-text text-start">
                        <h3>Email Us</h3>
                        <h6>demo@example.com</h6>
                    </div>
                </a>
                <a href="/" className="d-flex align-items-center my-2">
                    <div className="footer-icon-container mx-2">
                        <img src={call} height="50px" alt="" />
                    </div>
                    <div className="link-text text-start">
                        <h4>Call Us</h4>
                        <h6>+91 999-893-0598</h6>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default FooterLinks