import React from 'react'
import { SliderData } from '../../APIs/SliderData'
import SliderCard from './SliderCard'
import AliceCarousel from 'react-alice-carousel'

const index = () => {

    return (
        <>
            <div className="slider-bg container-fluid d-flex justify-content-center align-items-center img-fluid  my-5 gx-0">
                {/* {console.log(data.boxes[index].source)} */}
                <AliceCarousel autoPlay autoPlayInterval={3000}>
                    {SliderData.map((data) => {
                        return (
                            <div key={data.id} className="card-container container my-4 flex-wrap flex-md-nowrap d-flex flex-column flex-md-row justify-content-center align-items-center">
                                <SliderCard />
                            </div>
                        )
                    })}
                </AliceCarousel>
            </div>
        </>
    )
}

export default index