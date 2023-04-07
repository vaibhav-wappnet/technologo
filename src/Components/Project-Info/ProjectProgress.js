import React from 'react'
import ProgressBox from './ProgressBox'
import Completed from './Completed'

const ProjectProgress = () => {
    return (
        <div className="project-progress py-5 container-fluid d-flex flex-column flex-sm-row justify-content-around">

            <ProgressBox />

            <div className="complete col-md-5 d-flex justify-content-center">
                <Completed />
            </div>
        </div>
    )
}

export default ProjectProgress