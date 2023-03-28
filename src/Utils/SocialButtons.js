import React from 'react'

const SocialButtons = (props) => {
  return (
    <button className={props.className}>
        {props.icon}
    </button>
  )
}

export default SocialButtons;