import React from 'react'
import './Header.css'
import '../../index.css'
import Cta from './Cta'
import adnan from '../../assets/adnan.jpg'
import HeaderSocilas from './HeaderSocilas'
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h2>Hello I'am</h2>
        <h1>Adnan Ibrahim</h1>
        <h2 className="text-dev">Programmar,Developer</h2>
        <Cta/>
        <HeaderSocilas/>
        <div className="me">
          <img src={adnan} alt="me" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
