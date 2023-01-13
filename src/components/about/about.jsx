import React from 'react'
import './about.css'
import Me from '../../assets/David.jpg'

const about = () => {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
            <div className="about_me">
                  <div className="about_me-image">
                    <img src= {Me} alt="About Img" />
                  </div>
            </div>

            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card'>
                         <h5>Experience</h5> 
                         <small>3+ Years Working</small>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about