import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocilas = () => {
  return (
    <div className='header-social'>
        <a href="https://www.linkedin.com/in/adnan-ibrahim-37a274222/" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
        <a href="https://github.com/adnanibrahi0102" target="_blank" rel="noreferrer" ><GoMarkGithub/></a>
        <a href="https://www.instagram.com/iadnanibrahim/" target="_blank" rel="noreferrer" ><BsInstagram/></a>
      
    </div>
  )
}

export default HeaderSocilas
