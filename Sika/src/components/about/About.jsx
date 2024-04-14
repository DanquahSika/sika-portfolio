import React from "react";
import "./about.css";
import image from "../../assets/main.jpeg";

const Abouts = () => {
  return (
    <div className="about" style={{ marginTop: "1rem" }}>
      <img src={image} className="pic" />
      <div className="text">
        <h2>About Me</h2>
        <h5>FullStack Developer</h5>
        <p>
          As a seasoned full-stack developer with six months of dedicated
          experience, I bring a robust skill set and a passion for crafting
          exceptional digital solutions. My expertise spans across a wide array
          of technologies, including HTML, CSS, and JavaScript for front-end
          development, along with React for building dynamic user interfaces. On
          the back end, I'm proficient in Express and Node.js, leveraging their
          power to create scalable and efficient server-side applications.
        </p>
        <br />
        <p>
          My database skills extend to MongoDB, enabling me to design and
          implement data-driven solutions that are both secure and performant.
          Additionally, I have a strong grasp of modern CSS frameworks like
          Tailwind CSS and Material-UI (MUI), allowing me to create visually
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
