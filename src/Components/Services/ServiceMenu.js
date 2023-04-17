import React, { useState } from 'react';

import CommonButton from '../../Utils/CommonButton';
import ServiceButton from '../../Utils/ServiceButton';

import { ServiceBtnData } from '../../APIs/ServiceBtnData';
import { ServiceData } from '../../APIs/ServiceData';

const ServiceMenu = () => {

    const [menu, setMenu] = useState(ServiceBtnData[0]);
    const [details, setDetails] = useState(ServiceData[0]);

    const [active, setActive] = useState(false)
    const [activeButtonId, setActiveButtonId] = useState(1);


    return (
        <div data-aos="zoom-in" className="service-menu">
            <div className="service-menu d-flex flex-row justify-content-center">
                {ServiceBtnData.map((data) => {
                    return (
                        <div key={data.id}
                        >
                            <ServiceButton
                                id={data.id}
                                inner={data.text}
                                setMenu={setMenu}
                                setDetails={setDetails}
                                active={activeButtonId === data.id}
                                setActive={setActiveButtonId}
                            />
                        </div>
                    )
                })}
            </div>

            <div className="service-content my-4=5 d-flex flex-row">
                {details.content.map((item) => {
                    return (
                        <div data-aos="zoom-out" key={item.id} className="content-box my-2 container-lg d-flex justify-content-between">
                            <div className="image-container flex-column col-4">
                                <img src={item.image} className="service-emp" height="280px" width="400px" alt=":(" />
                                <img src={item.videoImage} className="video-img" height="150px" alt="" />
                            </div>
                            <div className="service-text-container flex-column col-6 text-start">
                                <p>
                                    {item.para_1}
                                </p>
                                <p>
                                    {item.para_2}
                                </p>
                                <div className="button-container d-flex justify-content-center">
                                    <CommonButton className="common-btn mx-2" text="Continue reading" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ServiceMenu;