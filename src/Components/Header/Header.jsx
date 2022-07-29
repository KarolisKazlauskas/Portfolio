import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/nida.jpeg'
import HeaderSocial from './HeaderSocial'
// import LanguageSwitch from './LanguageSwitch'


const Header = () => {
  return (
    <header>
      {/* <LanguageSwitch /> */}
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Karolis Kazlauskas</h1>
        <h5 className='text-light'>Java Script Junior Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
       

        <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header