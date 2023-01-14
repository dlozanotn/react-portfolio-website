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
                  MY NAME IS DAVID LOZANO TENORIO, I AM A WEB DESIGN PROFESSIONAL, CREATIVE AND RESPONSIBLE, WITH THE PLEASURE OF BEING IN CONSTANT LEARNING AND UPDATES. I HAVE LEARNED HOW TO USE WORDPRESS THROUGH DIFFERENT COURSES, AND I SPECIALIZE IN THE ELEMENTOR BUILDER. I HAVE DESIGNED DIFFERENT WEBSITES EITHER FROM 0, MODIFYING THEMES, OR MODIFYING CODE.I AM CURRENTLY TAKING COURSES TO HAVE AN ADVANCED LEVEL IN JS AND PHP, AS THE CAREER PATH FULLSTACK ENGINEER IN CODEACADEMY. I CAN ALSO PERFORM WORDPRESS MIGRATIONS WITHOUT THE PLUGIN, MODIFY THE INI.PHP FILE ACCORDING TO THE NEEDS OF A THEME, AND CREATE WEBSITES FROM DESIGNS FROM ADOBE XD, PNG, OR PHOTOSHOP. I ALSO DO DESIGN IN PHOTOSHOP AND ILLUSTRATOR AND THIS LETTER WAS MADE IN INDESIGN, AS WELL AS VIDEO EDITING WITH DAVINCI AND AFTER EFFECTS SOFTWARE, ALSO AUDIO EDITING.
                  THESE SKILLS ALLOW ME TO DEVELOP AUTONOMOUSLY IN CREATING A WEBSITE SINCE I DO FROM DESIGN, IMAGES, VIDEO, AUDIO, AND WRITING. IN ADDITION TO SEO CONFIGURATION AND SEO OPTIMIZATION TO CLIMB IN SEARCH ENGINES ORGANICALLY.
                </p>

                <a href="#contact" className='btn btn-primary'>Let´s Talk</a>
            </div>
        </div>
    </section>
  )
}

export default about