import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/nuyidl.png'
import IMG2 from '../../assets/luishuarachi.png'
import IMG3 from '../../assets/moms.png'
import IMG4 from '../../assets/shalfin.png'
import IMG5 from '../../assets/Untitled.png'
import IMG6 from '../../assets/eksy.png'
import IMG7 from '../../assets/griplockties.png'
import IMG8 from '../../assets/utah.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
          <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>Agency Theme Wordpress</h3>
                <div className="portfolio_item-cta">
                    <a href="https://nuyidl.com" className='btn' target='_blank'>Nuyidl</a>
                    <a href="https://nuyidl.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>

          <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={IMG2} alt="" />
                </div>
                <h3>Theme design Wordpress</h3>
                <div className="portfolio_item-cta">
                    <a href="https://nuyidl.com" className='btn' target='_blank'>Nuyidl</a>
                    <a href="https://nuyidl.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>

          <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={IMG3} alt="" />
                </div>
                <h3>Shopify Design and SEO</h3>
                <div className="portfolio_item-cta">
                    <a href="https://nuyidl.com" className='btn' target='_blank'>Nuyidl</a>
                    <a href="https://nuyidl.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>

          <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={IMG4} alt="" />
                </div>
                <h3>Wordpress Elementor custom theme and SEO</h3>
                <div className="portfolio_item-cta">
                    <a href="https://nuyidl.com" className='btn' target='_blank'>Nuyidl</a>
                    <a href="https://nuyidl.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>

          <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={IMG5} alt="" />
                </div>
                <h3>Shopify design and SEO</h3>
                <div className="portfolio_item-cta">
                    <a href="https://nuyidl.com" className='btn' target='_blank'>Nuyidl</a>
                    <a href="https://nuyidl.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>

          <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={IMG6} alt="" />
                </div>
                <h3>Wordpress Elementor custom theme</h3>
                <div className="portfolio_item-cta">
                    <a href="https://nuyidl.com" className='btn' target='_blank'>Nuyidl</a>
                    <a href="https://nuyidl.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>

          <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={IMG7} alt="" />
                </div>
                <h3>Wordpress Beaver builder Woocommerce</h3>
                <div className="portfolio_item-cta">
                    <a href="https://nuyidl.com" className='btn' target='_blank'>Nuyidl</a>
                    <a href="https://nuyidl.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>

          <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={IMG8} alt="" />
                </div>
                <h3>Wordpress theme customize</h3>
                <div className="portfolio_item-cta">
                    <a href="https://nuyidl.com" className='btn' target='_blank'>Nuyidl</a>
                    <a href="https://nuyidl.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
          </article>
      </div>
    </section>
  )
}

export default portfolio