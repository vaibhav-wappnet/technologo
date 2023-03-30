import React from 'react'

const CarouselButton = (props) => {
    return (
        <button className ={props.className} data-bs-target={props.target} data-bs-slide={props.slide}>{props.text}</button>
    )
}

export default CarouselButton;