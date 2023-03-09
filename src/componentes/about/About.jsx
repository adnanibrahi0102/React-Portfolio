import React from "react";
import "./About.css";
import adnan from "../../assets/adnan.png";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";


const About = () => {
  return (
    <>
    <section id="about">
      <h3>Get To Know</h3>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-img">
            <img src={adnan} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>0 Years</small>
            </article>
            <article className="about-card">
              <GiSkills className="about-icon" />
              <h5>Qualification</h5>
              <small>BTECH-CSE</small>
            </article>
            <article className="about-card">
              <GrProjects className="about-icon" />
              <h5>Projects</h5>
              <small>8+</small>
            </article>
          </div>
          <p>
            Enthusiastic engineering graduate with basic knowledge in coding and
            development. Ability to learn new softwares and technologies
            quickly. Capability to work in teams by providing valuable support.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
       {/* EXPERIENCE SECTION STARTED */}
      
    </section>
    

    </>
  );
};

export default About;
