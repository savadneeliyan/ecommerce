import React from 'react'
import './contact.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

function Contact() {
  return (
    <div className='Contact'>
        <div className="contact-container">
            <h2>be in touch</h2>
            <div className="join-us">
                <input type="email" name="" id="" />
                <button type="submit">join us</button>
            </div>
            <div className="socials">
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <GoogleIcon/>
            <PinterestIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact