import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/David-Lozano,-Web-Designer-.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
          <h5>Hello i am</h5>
          <h1>David Lozano</h1>
          <h5 className="text-light">Frontend Wordpress Developer and SEO</h5>
          <CTA />
          <HeaderSocial />
          <div className="me">
              <img className='medraw' src={ME} alt="" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header