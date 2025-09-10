import React from "react";
import HoloCard from "./HoloCard";

const Hero: React.FC = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h1>VEMULA VENKATESH</h1>
      <p className="hero-subtitle">
        Visionary Designer & Creative Technologist<br/>
        Crafting tomorrow's digital experiences today
      </p>
      <div className="cta-buttons">
        <button className="btn-primary">Explore My Work</button>
        <button className="btn-secondary">Let's Connect</button>
      </div>
    </div>
    <HoloCard />
  </section>
);

export default Hero;
