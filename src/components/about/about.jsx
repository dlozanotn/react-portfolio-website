import React from 'react'
import './about.css'
import Me from '../../assets/David.jpg'
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

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
                         <FaAward className='about_icon'/>
                         <h5>Experience</h5> 
                         <small>3+ Years Working</small>
                    </article>

                    <article className='about_card'>
                         <FiUsers className='about_icon' />
                         <h5>Clents</h5> 
                         <small>50+ Worldwide</small>
                    </article>

                    <article className='about_card'>
                         <VscFolderLibrary className='about_icon' />
                         <h5>Projects</h5> 
                         <small>20+ completed</small>
                    </article>
                </div>

                <p>
                  Hello my name is David Lozano, iam wordpress Developer, a love to work remotly  and i love the web design, i start to learnin wordpress, next, html y css,  a basic of php and javascript, and right now iam doing react projects.
                </p>

                <a href="#contact" className='btn btn-primary'>Let´s Talk</a>
            </div>
        </div>
    </section>
  )
}

export default about