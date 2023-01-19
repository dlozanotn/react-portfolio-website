import React from 'react'
import './footer.css'
import logo1 from '../../assets/Icon-david.png'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
        <div className="logo1">
        <a href='#header'><img src={logo1} alt="logo" /></a>

        </div>
       
        <ul className='permalinks'>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/dlozanotn" target="_blank" rel='noopener'><BsLinkedin /></a>
       <a href="https://github.com/dlozanotn" target="_blank" rel='noopener'><BsGithub /></a>
       <a href="https://facebook.com/nuyidlmarketing" target="_blank" rel='noopener'><BsFacebook /></a>
        </div>

        <div className="footer_copy">
          <small>
              &copy; David Lozano Tenorio. All rights Reservered 2023.
          </small>
        </div>
    </footer>
  )
}

export default footer