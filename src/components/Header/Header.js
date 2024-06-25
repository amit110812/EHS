import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div className='header-bar'>
        <div>#Logo</div>
        <div className='d-flex user-profile-detail'> 
            <div className='avatar-profile'></div>
            <div className='ms-2'>
            <p className='pb-0 mb-0'>Test Profile</p> 
            <p className='mb-0 profile-role'>Safety Inspector</p> 
            </div>
            </div>
    </div>
  )
}

export default Header