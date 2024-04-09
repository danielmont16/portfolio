import React from "react";
import { Carousel } from "react-responsive-carousel";
import TindogPage from "../../visuals/TindogPage.png";
import DiceGame from "../../visuals/DiceGame.png";
import SimonGame from "../../visuals/SimonGame.png";
import WhataFont from "../../visuals/WhataFont.png";
import Drumkit from "../../visuals/Drum-kit.png";
import MyfavoriteCandy from "../../visuals/MyfavoriteCandy.png";
import todoList from "../../visuals/todo-list.png"
import "../Works/works.css"

const Works = () => (

 <section id="works">
    <h2 className="worksTitle">My Portfolio</h2>
    <span className="worksDesc"> Here are some projects created during Dr. Angela Yu's course and various personal projects. Click on each project's name to experience its live version.</span>
          <Carousel autoPlay showThumbs={true} infiniteLoop={true} centerMode={true} centerSlidePercentage={80} >
            <div>
              <img alt="Tindog Page"  src={TindogPage}/>
              <p className="legend"><a href="https://danielmont16.github.io/TinDog/">Tindog Page</a></p>
          
            </div>
            <div>
              <img alt="Dice Game" src={DiceGame} />
              <p className="legend"><a href="https://danielmont16.github.io/DiceGame/">Dice Game</a></p>
            </div>
            <div>
              <img  alt="Simon Game" src={SimonGame} />
              <p className="legend"><a href="https://danielmont16.github.io/Simon-Game/">Simon Game</a></p>
            </div>
            <div>
              <img  alt="What-a-font" src={WhataFont} />
              <p className="legend"><a href="https://danielmont16.github.io/What-a-Font/">What a Font Page</a></p>
            </div>
            <div>
              <img  alt="DrumKit" src={Drumkit} />
              <p className="legend"><a href="https://danielmont16.github.io/DrumKit/">Drumkit Page</a></p>
            </div>
            <div>
              <img  alt="My favorite candy" src={MyfavoriteCandy} />
              <p className="legend"><a href="https://danielmont16.github.io/How-sweet-is-this/">My favorite candy page</a></p>
            </div>
            <div>
              <img  alt="To-Do List" src={todoList} />
              <p className="legend"><a href="https://todo-list-a8b81.web.app/">To-do List</a></p>
            </div>

          </Carousel>

</section>
);

export default Works;
