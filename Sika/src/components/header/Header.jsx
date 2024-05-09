import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./header.css";
import image from "../../assets/main.jpeg";

const Header = () => {
  return (
    <>
      <div className="hero overflow-x-hidden">
        <div className="main md:flex-row md:justify-center md:mt-16">
          <img
            src={image}
            alt="men"
            className="men"
            style={{ borderRadius: "999px", paddingBottom: "2rem" }}
          />
          <div className="main-detil">
            <p>Hello I'm</p>
            <h1 className="font-semibold">Abigail C. Danquah</h1>
            <h4>Frontend Developer</h4>
            <div className="btn">
              <button type="submit">Download CV</button>
              <button type="submit" className="btn-2"><NavLink to="/contact">Hire Me</NavLink></button>
            </div>
            <div className="social">
              <a href="https://github.com/DanquahSika"><i className="bx bxl-github" /></a>
              <a href="https://www.instagram.com/danqs_?igsh=ZTJhY2M2MXhvdnll"><i className="bx bxl-instagram" /></a>
            </div>
          </div>
        </div>
        <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
