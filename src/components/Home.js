import React, { useEffect, useState } from "react";
import hero from "../images/fg.png";
import Image from './Image'

const Home = () => {
  return (
    <div>
      <header>
        <h2 className="header">EMEM MEME</h2>
      </header>
      <div className="hero">
        <h1 className="hero-text">
          Your <span>FACE</span> with favourite
          <i>
            <span> MEMES</span>
          </i>
        </h1>
        <img className="hero-img" src={hero} alt="cheems" />
      </div>
      <div className="hero-btn">
        <button>TRY NOW</button>
      </div>
      <Image/>
    </div>
  );
};

export default Home;
