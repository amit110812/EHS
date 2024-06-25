import React, {useState} from 'react'
import './Sidebar.css'
import { MdHome, MdSettings , MdArrowBack} from "react-icons/md";
import { BsInfoLg, BsDatabaseFill } from "react-icons/bs";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Sidebar = () => {
 const [toggle, setToggle] = useState(false) 

  return (
    <div className='sidebar-item-section mt-5'>
        <div className={toggle ? "sidebar-icons-true" : 'sidebar-icons'} onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)}>
        <div className='icon-items-sidebar'>
        <MdHome size={20} className=' icon-menu'/>
        <span className="ms-5" >Home</span>
        </div>
        <div className='icon-items-sidebar mt-4'>
        <MdSettings size={20} className=' icon-menu' />
        <span className="ms-5" >Settings</span>
        </div>
        <div className='icon-items-sidebar mt-4'>
        <MdArrowBack size={20} className=' icon-menu' />
        <span className="ms-5" >Back</span>
        </div>
        <div className='icon-items-sidebar mt-4'>
        <BsInfoLg size={20} className=' icon-menu' />
        <span className="ms-5" >Incident</span>
        </div>
        <div className='icon-items-sidebar mt-4'>
        <BsDatabaseFill size={20} className=' icon-menu' />
        <span className="ms-5" >Mining</span>
        </div>
        </div>
      
      
        </div>
  )
}

export default Sidebar