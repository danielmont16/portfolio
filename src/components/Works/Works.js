import React from "react";
import { Carousel } from "react-responsive-carousel";
import TindogPage from "../../visuals/TindogPage.png";
import DiceGame from "../../visuals/DiceGame.png";
import SimonGame from "../../visuals/SimonGame.png";
import WhataFont from "../../visuals/WhataFont.png";
import Drumkit from "../../visuals/Drum-kit.png";
import MyfavoriteCandy from "../../visuals/MyfavoriteCandy.png";
import "../Works/works.css"

const Works = () => (

 <section id="works">
    <h2 className="worksTitle">My Portfolio</h2>
    <span className="worksDesc"> Here are some projects created during Dr. Angela Yu's course and various personal projects. For more details, please visit my GitHub account.</span>
          <Carousel autoPlay showThumbs={true} infiniteLoop={true} centerMode={true} centerSlidePercentage={80} >
            <div>
              <img alt="Tindog Page"  src={TindogPage}/>
              <p className="legend">Tindog Page</p>
          
            </div>
            <div>
              <img alt="Dice Game" src={DiceGame} />
              <p className="legend">Dice Game</p>
            </div>
            <div>
              <img  alt="Simon Game" src={SimonGame} />
              <p className="legend">Simon Game</p>
            </div>
            <div>
              <img  alt="What-a-font" src={WhataFont} />
              <p className="legend">What a font!</p>
            </div>
            <div>
              <img  alt="DrumKit" src={Drumkit} />
              <p className="legend">DrumKit</p>
            </div>
            <div>
              <img  alt="My favorite candy" src={MyfavoriteCandy} />
              <p className="legend">My favorite Candy</p>
            </div>

          </Carousel>

</section>
);

export default Works;
