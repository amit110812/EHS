import React from 'react'
import './Login.css'
import PrimaryButton from '../../utils/PrimaryButton'
import Carousel from 'react-bootstrap/Carousel';
import safe1 from '../../assets/Images/safe1.jpg'
import safe2 from '../../assets/Images/safe2.jpg'
import safe3 from '../../assets/Images/safe3.jpg'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='login-page'>
      <div  className='main-box'>
        <div className='login-right-box' style={{padding:"0px"}}>
        <Carousel>
      <Carousel.Item>
        <img src={safe1} alt="image" />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={safe2} alt="image"/>
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={safe3} alt="image"/>
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <div className='login-right-box' style={{borderLeft:"none"}}>
          <div style={{textAlign:"left", color:"#D66853"}}>
          <h3>Welcome to safety</h3>

          </div>
          <form className='login-form mt-5' >
            <label>Username</label>
            <input type='text'/>
            <label className='mt-2'>Password</label>
            <input type='password'/>
            <span className='text-end cursor' style={{color:"blue", cursor:"pointer", fontSize:"12px"}}><a>forgot password?</a></span>
            <div className='mt-4'>
            <PrimaryButton title={"Login"}/>

            </div>
            <h6 className='mt-4 pt-2'>Or <span style={{color:"#D66853", cursor:"pointer" }} onClick={()=>navigate("/signup")}>Sign up</span> here </h6>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
