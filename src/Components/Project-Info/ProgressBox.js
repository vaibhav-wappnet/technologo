import React from 'react';
import { ProgressData } from '../../APIs/ProgressData';

const ProgressBox = () => {
    return (
        <>
            <div className="progress-box p-3 d-flex flex-column justify-content-center  ">
                {ProgressData.map((data) => {
                    return (
                        <div key={data.id} className="progress-text p-2 d-flex flex-column">
                            <div className="d-flex justify-content-between">
                                <p className="">{data.text}</p>
                                <p>{data.value}</p>
                            </div>
                            <div className="progress d-flex" style={{ height: "4px" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${data.value}`, backgroundColor: `${data.bg}` }}
                                    aria-valuenow={data.value}
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default ProgressBox