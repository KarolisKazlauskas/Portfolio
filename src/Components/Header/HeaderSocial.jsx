import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs' 


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://Linkedin.com" target='_blank'rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'rel="noopener noreferrer"><BsGithub/></a>
        
    </div>
  )
}

export default HeaderSocial