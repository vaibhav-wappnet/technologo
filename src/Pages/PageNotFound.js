import React from 'react'
import NotFound from "../Assets/404 Error-bro.png"

const PageNotFound = () => {
  return (
    <div>
        <div className="">
            <div className="img-container">
                <img src={NotFound} className="error-img img-fluid" alt="" />
            </div>
        </div>
    </div>
  )
}

export default PageNotFound