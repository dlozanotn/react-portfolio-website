import React from 'react'
import './experience.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaWordpress} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaFigma} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaPhp} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills i Have</h5>
      <h2>My experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
              <h3>Frontend Development</h3>
              <div className="experience_content">
                  <article className='experience_detail'>
                      <FaHtml5 className='details-icon'/>
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <FaCss3Alt className='details-icon'/>
                      <h4>CSS</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
                  <article className='experience_detail'>
                      <FaBootstrap className='details-icon'/>
                      <h4>bootstrap</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <FaWordpress className='details-icon'/>
                      <h4>Wordpress</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <SiJavascript className='details-icon'/>
                      <h4>javascript</h4>
                      <small className='text-light'>basic</small>
                  </article>
                  <article className='experience_detail'>
                      <FaReact className='details-icon'/>
                      <h4>React</h4>
                      <small className='text-light'>basic</small>
                  </article>
                  <article className='experience_detail'>
                      <FaFigma className='details-icon'/>
                      <h4>Figma</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
              </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
              <div className="experience_content">
                  <article className='experience_detail'>
                      <FaNodeJs className='details-icon'/>
                      <h4>Node JS</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <FaPhp className='details-icon'/>
                      <h4>PHP</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
                  <article className='experience_detail'>
                      <SiMysql className='details-icon'/>
                      <h4>MySQL</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <FaWordpress className='details-icon'/>
                      <h4>Wordpress</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
              </div>
        </div>
      </div>
    </section>
  )
}

export default experience