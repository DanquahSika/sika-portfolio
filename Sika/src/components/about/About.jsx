import React from "react";
import "./about.css";
import image from "../../assets/main.jpeg";

const Abouts = () => {
  return (
    <div className="about" style={{ marginTop: "1rem" }}>
      <img src={image} className="pic" />
      <div className="text">
        <h2>About Me</h2>
        <h5>Frontend Developer</h5>
        <p>
          As a frontend developer with six months of dedicated
          experience, I bring a robust skill set and a passion for crafting
          exceptional digital solutions. My expertise spans across a wide array
          of technologies, including HTML, CSS, and JavaScript for front-end
          development, along with React for building dynamic user interfaces.
        </p>
        <br/>
        <p>
          Additionally, I have a good grasp of modern CSS frameworks like
          Tailwind CSS, allowing me to create visually
          stunning and responsive designs with ease.
        </p>
        <div className="data">
          <button type="submit" className="btn-2">
            <a href="#"> Hire Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
