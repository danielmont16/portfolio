import React, { useState } from 'react';
import "./Navbar.css"
import logo from "../../visuals/logo.svg"
import contact from "../../visuals/chat.png"
import { Link } from 'react-scroll';
import menu from "../../visuals/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo}  alt='' className="logo"/>
        <div className='desktopMenu'>
            <Link activeClass='active' to ="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to ="skills" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to ="works" spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            
        </div>
        <button className='desktopMenuBtn' onClick={() =>{
          document.getElementById("contacts").scrollIntoView({behavior : 'smooth'});
        }}>

            <img src={contact} className='desktopMenuImg' alt=''/>Contact Me
        </button>

        <img src={menu} alt='menu' className="mobMenu" onClick = {() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? "flex":"none"}}>
            <Link activeClass='active' to ="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem'onClick = {() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to ="skills" spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick = {() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to ="works" spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick = {() => setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to ="contacts" spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick = {() => setShowMenu(false)}>Contact Me</Link>
            
        </div>


    </nav>
  )
}

export default Navbar