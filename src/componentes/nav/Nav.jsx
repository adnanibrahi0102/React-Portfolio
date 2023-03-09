import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {MdDeveloperMode} from 'react-icons/md'
import {MdContactMail} from 'react-icons/md'
import{BsCaretDownSquareFill} from 'react-icons/bs'
import { useState } from 'react'
const Nav = () => {
  const [activeNav,SetActive]=useState('#')
  return (
   <nav>
    <a href="#" onClick={()=>SetActive('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>SetActive('#about')} className={activeNav==='#about'?'active':''}><SiAboutdotme/></a>
    <a href="#services" onClick={()=>SetActive('#services')} className={activeNav==='#services'?'active':''}><MdDeveloperMode/></a>
    <a href="#contact"  onClick={()=>SetActive('#contact')} className={activeNav==='#contact'?'active':''}><MdContactMail/></a>
    <a href="#footer"  onClick={()=>SetActive('#footer')} className={activeNav==='#footer'?'active':''}><BsCaretDownSquareFill/></a>
   </nav>
  )
}

export default Nav
