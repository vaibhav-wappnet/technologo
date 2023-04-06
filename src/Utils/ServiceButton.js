import React, { useState } from 'react'
import * as BsIcons from "react-icons/bs"
import { ServiceBtnData } from '../APIs/ServiceBtnData';
import { ServiceData } from '../APIs/ServiceData';

const ServiceButton = ({ setDetails, setMenu, active, setActive, inner, id }) => {

    return (
        <button
            className={active ? `service-btn pink-bg` : `service-btn`}
            onClick={() => {
                setActive(id)
                setMenu(ServiceBtnData[id - 1])
                setDetails(ServiceData[id - 1])
            }}
        >
            <BsIcons.BsChatText className="btn-icon" />
            {inner}
        </button>
    )
}

export default ServiceButton