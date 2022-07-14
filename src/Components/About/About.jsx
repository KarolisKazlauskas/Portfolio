import React from "react";
import "./About.css";
import Me from "../../assets/Kalnai_profile.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TiFolderOpen } from "react-icons/ti";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="Paveikslelis" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Completing the course</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>You can be first</small>
            </article>

            <article className="about__card">
              <TiFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>2+</small>
            </article>
          </div>

          <p>
            Im new Java Script development searhing for job, or practice.
              Also im like sport activities like basketball, padel, snowbording and wake-bording.
          
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
