import React from 'react'
import './Footer.css'
import { assets } from '../../Assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
        <div className='footer-content-left'>
        <img src={assets.logo} alt=''/>
        <p>kkjkjkjkjkjkjkajkfjkjekjakfjkejrijoijafkjkjkjiqjonfdlkjkfjifjaoij kkjkjkjkjkjkjkajkfjkjekjakfjkejrijoijafkjkjkjiqjonfdlkjkfjifjaoij 
            kkjkjkjkjkjkjkajkfjkjekjakfjkejrijoijafkjkjkjiqjonfdlkjkfjifjaoij</p>
        <div className='footer-social-icons'>
        <img src={assets.facebook_icon} alt=''/>
        <img src={assets.twitter_icon} alt=''/>
        <img src={assets.linkedin_icon} alt=''/>
        </div>
        </div>
        <div className='footer-content-center'>
         <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delievery</li>
            <li>Privacy Policy</li>
        </ul>
        
        </div>
        <div className='footer-content-right'>
            <h2>Contact Us</h2>
            <ul>
                <li>+91 6204357202</li>
                <li>princekumarjha2015@gmail.com</li>
            </ul>
        </div>
        
    </div>
    <hr />
    <p className='footer-copyright'>copyright 2024 © Tomato.com - All Right Reserved
    </p>
    <p className='create'> Created by Prince kumar jha</p>
    </div>
  )
}

export default Footer