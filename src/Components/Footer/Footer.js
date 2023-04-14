import React from 'react'
import FooterLinks from './FooterLinks'
import FooterMenu from './FooterMenu'

const index = () => {
  return (
    <>
      <div className=" footer d-flex flex-column">
        <FooterLinks />
        <FooterMenu />
      </div>
    </>
  )
}

export default index