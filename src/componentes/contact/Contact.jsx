import React from 'react'
import './Contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q9kimoj', 'template_vhe9lml', form.current, '-uMvFJHr9B_jkBNhL')
   
      .then((result) => {
        e.target.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h3>Get In Touch</h3>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <artile className="contact-option">
            <MdAttachEmail className='contact-icon'/>
             <h3>Email</h3>
             <h5>adnanibrahi96@gmail.com</h5>
             <a href="mailto:adnanibrahi96@gmail.com" target="_blank"  rel="noreferrer">Send a message</a>
          </artile>
          <artile className="contact-option">
            <GrInstagram className='contact-icon'/>
             <h3>Instagram</h3>
             <h5>iadnanibrahim</h5>
             <a href="https://www.instagram.com/iadnanibrahim/" target="_blank"  rel="noreferrer">Send a message</a>
          </artile>
          <artile className="contact-option">
            <BsWhatsapp className='contact-icon'/>
             <h3>Whatsaap</h3>
             <h5>+916005797717</h5>
             <a href="https://wa.me/916005797717" target="_blank"  rel="noreferrer">Send a message</a>
          </artile>
        </div>
        {/* END OF CONTACT OPTIONS */}
    <form ref={form} onSubmit={ sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email"name='email' placeholder='Your Email'required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' id='form-btn'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
