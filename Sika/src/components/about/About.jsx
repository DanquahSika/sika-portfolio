import React from "react";
import "./about.css";
import image from "../../assets/main.jpeg";

const Abouts = () => {
  return (
    <div className="about" style={{ marginTop: "5rem" }}>
      <img src={image} className="pic" />
      <div className="text">
        <h2>About Me</h2>
        <h5>
          Front-end Developer &amp; <span>Designer</span>
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          natus ad sed harum itaque ullam enim quas, veniam accusantium, quia
          animi id eos adipisci iusto molestias asperiores explicabo cum vero
          atque amet corporis! Soluta illum facere consequuntur magni. Ullam
          dolorem repudiandae cumque voluptate consequatur consectetur, eos
          provident necessitatibus reiciendis corrupti!
        </p>
        <div className="data">
          <a href="#" className="hire">
            Hire Me
          </a>
        </div>
      </div>
    
    </div>
  );
};

export default Abouts;