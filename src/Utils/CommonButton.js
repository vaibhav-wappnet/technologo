import React from 'react'
import * as HiIcons from "react-icons/hi"

const CommonButton = (props) => {
  return (
    <button className={props.className}>
        {props.text}
    <HiIcons.HiOutlineArrowNarrowRight  className='btn-arrow'/>
    </button>
  )
}

export default CommonButton