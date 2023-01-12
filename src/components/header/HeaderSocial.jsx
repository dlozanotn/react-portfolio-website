import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
       <a href="https://www.linkedin.com/in/dlozanotn" target="_blank" rel='noopener'><BsLinkedin /></a>
       <a href="https://github.com/dlozanotn" target="_blank" rel='noopener'><BsGithub /></a>
       <a href="https://facebook.com/nuyidlmarketing" target="_blank" rel='noopener'><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocial