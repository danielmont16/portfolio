import React from 'react';
import "./contacts.css";
import gitHubIcon from "../../visuals/github.png";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bshw4ua', 'template_yak0z9f', form.current, 'WFcpyHR9JMmjNyVcj')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent');
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contacts">
        <div >
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Feel free to contact me using the form below </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='your name' name='from_name'/>
                <input type="email" className='email' placeholder='your email'name='from_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your message'></textarea>
                <button type='submit' value="send" className='submitBtn' >Submit</button>
                <div className='links'>
                    <a href='https://github.com/danielmont16'><img src={gitHubIcon} alt="github icon" className='link'></img></a>
                    
                </div>
            </form>
        
        </div>

    </section>
   
  )
}

export default Contacts;