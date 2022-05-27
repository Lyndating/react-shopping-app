import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate=useNavigate();
  return (
    <div className='footer'>
        <div className='footer_info'>

        </div>
        <div className='footer_signup'>
            <h5>SIGN UP NOW</h5>
            <p> for the latest new and trends</p>
            <button onClick={()=>{navigate("/login")}}> Creates an Account </button>
        </div>
    </div>
  )
}

export default Footer;