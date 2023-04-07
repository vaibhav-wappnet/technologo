import React from 'react'
import SelectProject from './SelectProject'
import ProjectProcess from './ProjectProgress'

const index = () => {
    return (
        <>
            <div className="project-title container d-flex flex-column my-5">
                <div className="title-text d-flex align-items-center justify-content-center">
                    <hr />
                    <p>Working Process</p>
                    <hr />
                </div>
                <h2>How Does We Work</h2>
            </div>
            <div className="my-5 text-light projects justify-content-evenly d-flex flex-wrap">
                <SelectProject />
                <SelectProject />
                <SelectProject />
            </div>

            {/* <> */}
                <ProjectProcess />
            {/* </> */}

        </>
    )
}

export default index