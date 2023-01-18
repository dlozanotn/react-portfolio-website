import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
        <h5>What i Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
              <article className="service">
                    <div className="service_head">
                        <h3>Ux/UI Design</h3>
                    </div>

                    <ul className="service_list">
                      <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </li>
                      <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </li>
                      <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </li>
                    </ul>
              </article>

              <article className="service">
                    <div className="service_head">
                        <h3>Wordpress and Web Development</h3>
                    </div>

                    <ul className="service_list">
                      <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </li>
                      <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </li>
                      <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </li>
                    </ul>
              </article>

              <article className="service">
                    <div className="service_head">
                        <h3>SEO</h3>
                    </div>

                    <ul className="service_list">
                      <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </li>
                      <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </li>
                      <li>
                        <BiCheck className='service_list-icon'/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                      </li>
                    </ul>
              </article>
        </div>

    </section>
  )
}

export default services