import React from 'react'
import CommonButton from '../../Utils/CommonButton'
import BG from "../../Assets//Contact-bg.png"

const index = () => {
    return (
        <>
            <div className="contact-bg p-0 container-fluid d-flex flex-row">
                <img src={BG} className="img-fluid" alt="" />
            </div>
            <div className="info container d-flex">
                <div className="info-left text-light text-start d-flex col-6 flex-column justify-content-center align-items-center">
                    <h1>Learn Any information for IT Solutions</h1>
                    <CommonButton className="common-btn text-uppercase" text="contact us" />
                </div>
                <div className="info-right">
                    <img src={{}} alt="" />
                </div>
            </div>
        </>
    )
}

export default index