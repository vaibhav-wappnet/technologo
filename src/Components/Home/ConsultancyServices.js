import React from 'react'
import { ServicesData } from '../../APIs/ServicesData'
const ConsultancyServices = () => {
    return (
        <div className="services d-flex flex-wrap flex-row justify-content-center align-items-center">
            {ServicesData.map((data) => {
                return (

                    <div key={data.id} className={data.className}>
                        <img src={data.image} className="justify-content-center my-3" height="40px" width="40px" alt=":(" />
                        <h3>IT Consultancy</h3>
                        <p>It is a long established fact that
                            reader will be distracted the readable
                            content page when looking</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ConsultancyServices