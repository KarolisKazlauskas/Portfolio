import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_azpa05l', 'template_c011we8', form.current, 'SiK-e-nHVfGsKEHwH')

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

<div className='container contact__container'>
<div className="contact__options">
  <article className="contact__option">
    <HiOutlineMail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>karoliui@kazlauskui.lt</h5>
    <a href="mailto:karoliui@kazlauskui.lt" target='_blank'rel="noopener noreferrer">Send a message</a>
  </article>
  <article className="contact__option">
    <RiMessengerLine className='contact__option-icon'/>
    <h4>Messenger</h4>
    <h5>let's communicate</h5>
    <a href="https://m.me/KarolisSamurajus" target='_blank'rel="noopener noreferrer">Send a message</a>
  </article>
  <article className="contact__option">
    <ImWhatsapp className='contact__option-icon'/>
    <h4>WhatsApp</h4>
    <h5>call me</h5>
    <a href="https:/api.whatsapp.com/send?phone=37062433367" target='_blank'rel="noopener noreferrer">Send a message</a>
  </article>
</div>
{/* PABAIGA CONTACT OPTIONS */}
<form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Your Full Name' required />
  <input type="email" name='email' placeholder='Your Email' required />
  <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>
</form>
</div>
    </section>
  )
}

export default Contact