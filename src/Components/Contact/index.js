import React from 'react'
import CommonButton from '../../Utils/CommonButton'
import BG from "../../Assets//Contact-bg.png"

const index = () => {
    return (
        <>
            <div className="contact-bg my-5 p-0 position-relative container-fluid d-flex justify-content-center flex-row">
                <img src={BG} className="img-fluid" alt="" />
                <div className="info container d-flex justify-content-around align-items-center">
                    <div className="info-left text-light text-start d-flex col-5 flex-column justify-content-center align-items-start">
                        <h1>Learn Any information for IT Solutions</h1>
                        <CommonButton className="common-btn text-uppercase" text="contact us" />
                    </div>
                    <div className="info-right">
                        <CommonButton className="common-btn contact-btn" text="+91 9998930598" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index