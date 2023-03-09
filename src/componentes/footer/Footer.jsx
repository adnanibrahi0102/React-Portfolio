import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
   <footer id='footer'>
    <a href="#" className='footer-logo'>adnan.exe</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#services">Services</a></li>
    </ul>
    <div className="footer-socials">
      <a href="https://www.facebook.com/profile.php?id=100024497047534" target="_blank" rel='noreferrer'><FaFacebookSquare/></a>
      <a href="https://twitter.com/Adnanibrahi0102" target="_blank" rel='noreferrer'><BsTwitter/></a>
      <a href="https://www.linkedin.com/in/adnan-ibrahim-37a274222/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
    </div>
    <div className="footer-copyright">
      <small>&copy;AdnanIbrahim All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer
