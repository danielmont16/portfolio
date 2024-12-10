import React from 'react';
import "./intro.css";
import bg from "../../visuals/profile.png";


const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>I'm <span className='introName'>Daniel</span><br/>Software Developer</span>
        <p className='introPara'>Web developer enthusiast with a strong foundation in software development, embarking on a journey to become a full-stack developer.<br/>Curious and eager to learn new technologies.</p>
        </div>
        <img src={bg} alt='profile' className='bg'></img>
    </section>
  )
}

export default Intro;