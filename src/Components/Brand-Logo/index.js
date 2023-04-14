import React from 'react'
import { BrandLogoData } from "../../APIs/BrandLogoData"

const index = () => {
    return (
        <div className="my-5">
            <div className="brand-logos d-flex container flex-nowrap justify-content-between overflow-auto">
                {BrandLogoData.map((data) => {
                    return (

                        <div key={data.id} className="brand-logo d-flex justify-content-center align-items-center">
                            <img src={data.source} className="brand-logo-images mx-1" alt=":(" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default index