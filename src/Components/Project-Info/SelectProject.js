import React from 'react'
import message from "../../Assets/message.png"

const SelectProject = (props) => {
    return (
        <div data-aos="flip-left" className="project-box d-flex my-3 px-3 flex-column justify-content-center align-items-center">
            <div className="image-box my-4">
                <img src={message} height="50px" alt="" />
            </div>
            <h5>Select Project</h5>
            <p className="mt-3">
                Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium
                doloremque laudantium totam
            </p>
        </div>
    )
}

export default SelectProject