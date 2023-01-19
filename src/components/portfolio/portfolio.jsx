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

const data = [
{
    id: 1,
    image: IMG1,
    title: 'Agency Theme Wordpress',
    demo: 'https://nuyidl.com'
},

{
    id: 2,
    image: IMG2,
    title: 'Theme design Wordpress',
    demo: 'https://luishuarachi.com/'
},

{
    id: 3,
    image: IMG3,
    title: 'Shopify Design and SEO',
    demo: 'https://momsplaceglutenfree.com/'
},

{
    id: 4,
    image: IMG4,
    title: 'Wordpress Elementor custom theme and SEO',
    demo: 'https://johnowenwilde.com/'
},

{
    id: 5,
    image: IMG5,
    title: 'Shopify design and SEO',
    demo: 'https://liferocksplantfood.shop/'
},

{
    id: 6,
    image: IMG6,
    title: 'Wordpress Elementor custom theme',
    demo: 'https://eksayn.com/'
},

{
    id: 7,
    image: IMG7,
    title: 'Wordpress Beaver builder Woocommerce',
    demo: 'https://griplockties.com/'
},

{
    id: 8,
    image: IMG8,
    title: 'Wordpress theme customize',
    demo: 'https://utahboxtruckrentals.com'
},

]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
          {
            data.map(({id,image,title,demo}) => {
                return (
                    <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                    <a href={demo} className='btn btn-primary'  target='_blank'>Live Demo</a>
                </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio