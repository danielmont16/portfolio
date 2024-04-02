import React from 'react';
import Navbar from './NavBar/Navbar';
import Intro from "./Intro/Intro";
import Skills from './Skills/Skills';
import Works from './Works/Works';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';

function App(){
    return (
    <div className= "App">
        <Navbar/>
        <Intro/>
        <Skills/>
       <Works/>
       <Contacts/>
       <Footer/>
        </div>);
}

export default App;
