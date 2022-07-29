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
              <small>Frontend (JavaScript) </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>You can be my first client</small>
            </article>

            <article className="about__card">
              <TiFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>2+</small>
            </article>
          </div>

          <p>
          I have gained experience working in various companies through the years and half a year ago I decided to change my career path and started taking programming courses. After successfully completing the Vilnius Coding School programming basics, I understood that I want to grow my career in this field so
I continued trainings in JavaScript (Front-End) and now I am open to new career opportunities as a junior developer.
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
