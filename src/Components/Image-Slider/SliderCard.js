import React from 'react'
import { SliderData } from '../../APIs/SliderData'
import AliceCarousel from 'react-alice-carousel'
import CommonButton from "../../Utils/CommonButton"

const SliderCard = () => {
    return (
        <>
            {
                SliderData.map((item) => {
                    return (
                        <div key={item.id} className="card m-2" style={{ width: "18rem" }}>
                            <img src={item.boxes[0].source} height={"150px"} className="card-img-top" alt="..." />
                            <div className="card-body text-start">
                                <h5 className="card-title fw-bold">What is Lorem Ipsum</h5>
                                <p className="card-text">
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of
                                    type and scrambled make a type specimen book.
                                </p>
                                <CommonButton className="common-btn pink-bg text-uppercase" text="read more" />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SliderCard