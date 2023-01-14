import React from 'react'
import './experience.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaWordpress} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaFigma} from 'react-icons/fa'

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
                      <FaHtml5 />
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <FaCss3Alt />
                      <h4>CSS</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
                  <article className='experience_detail'>
                      <FaBootstrap />
                      <h4>bootstrap</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <FaWordpress />
                      <h4>Wordpress</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <SiJavascript />
                      <h4>javascript</h4>
                      <small className='text-light'>basic</small>
                  </article>
                  <article className='experience_detail'>
                      <FaReact />
                      <h4>React</h4>
                      <small className='text-light'>basic</small>
                  </article>
                  <article className='experience_detail'>
                      <FaFigma />
                      <h4>Figma</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
              </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
              <div className="experience_content">
                  <article className='experience_detail'>
                      <FaHtml5 />
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <FaCss3Alt />
                      <h4>CSS</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
                  <article className='experience_detail'>
                      <FaBootstrap />
                      <h4>bootstrap</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <FaWordpress />
                      <h4>Wordpress</h4>
                      <small className='text-light'>Experienced</small>
                  </article>
                  <article className='experience_detail'>
                      <SiJavascript />
                      <h4>javascript</h4>
                      <small className='text-light'>basic</small>
                  </article>
                  <article className='experience_detail'>
                      <FaReact />
                      <h4>React</h4>
                      <small className='text-light'>basic</small>
                  </article>
                  <article className='experience_detail'>
                      <FaFigma />
                      <h4>Figma</h4>
                      <small className='text-light'>Intermediate</small>
                  </article>
              </div>
        </div>
      </div>
    </section>
  )
}

export default experience