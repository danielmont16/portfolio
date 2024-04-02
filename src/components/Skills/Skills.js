import React from 'react';
import "./skills.css";
import webDev from "../../visuals/skills-img-webDev.png";
import softwareDev from "../../visuals/skills-img-softwareDev.png";
import backEndDev from "../../visuals/skills-img-backEndDev.png";

const Skills = () => {
  return (
    <section id='skills'>
        
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Due to my computer programming studies, I am available to apply my knowledge in the following fields:</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img className="skillBarImg" src={webDev} alt='web developer'/>
                    <div className='skillBarText'>
                        <h2>Web developer</h2>
                        <p>Proficient in HTML, CSS, and JavaScript, with hands-on experience in building responsive and visually appealing websites. Familiar with front-end frameworks like React.</p>
                    </div>
            
            </div>

            <div className='skillBar'>
                <img className="skillBarImg" src={softwareDev} alt='software developer'/>
                    <div className='skillBarText'>
                        <h2>Software Developer</h2>
                        <p>Skilled in software development, particularly adept at coding in languages like Python, Java, and C++.</p>
                    </div>
            
            </div>

            <div className='skillBar'>
                <img className="skillBarImg" src={backEndDev} alt='backEnd developer'/>
                    <div className='skillBarText'>
                        <h2>Backend Developer</h2>
                        <p>Experienced in designing and implementing scalable backend systems using technologies such as Node.js and Express.</p>
                    </div>
            
            </div>
        </div>
        
    </section>
  )
}

export default Skills;