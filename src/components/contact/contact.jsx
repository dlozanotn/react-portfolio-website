import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'


const Contact = () => {
  
   return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
              <AiOutlineMail className='contact-icon' />
              <h4>Email</h4>
              <h5>dlozanotn@gmail.com</h5>
              <a href="mailto:dlozanotn@gmail.com">Send a Message</a>
          </article>

          <article className="contact_option">
              <FaFacebookMessenger className='contact-icon'/>
              <h4>Messenger</h4>
              <h5>Nuyidlmarketing</h5>
              <a href="https://m.me/nuyidlmarketing">Send a Message</a>
          </article>

          <article className="contact_option">
              <AiOutlineWhatsApp className='contact-icon'/>
              <h4>WhatsApp</h4>
              <h5>David Lozano</h5>
              <a href="https://api.whatsapp.com/send?phone+527821682588">Send a Message</a>
          </article>
        </div>
           {/*Contac left ends */}
        
               
        <form>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' value='send' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
   )
};

export default Contact