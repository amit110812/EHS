import React from 'react'
import './Footer.css'
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='footer-section'>
        <>
        <RiCopyrightLine size={21} className='me-1 pb-1' />   
        All rights reserved
        </>
    </div>
  )
}

export default Footer