import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/Dab_kalnai.jpeg";
import IMG3 from "../../assets/Nida_svyturys.jpeg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "My portfolio visualization",
    github: "https://github.com",
    demo: "https://github.com/KarolisKazlauskas/Portfolio",
    
  },
  {
    id: 2,
    image: IMG2,
    title: "Future works",
    github: "https://github.com",
    demo: "https://github.com/KarolisKazlauskas/Portfolio",
    
  },
  {
    id: 3,
    image: IMG3,
    title: "Future works",
    github: "https://github.com",
    demo: "https://github.com/KarolisKazlauskas/Portfolio",
    /* demo: nuoroda i nauja projekta ateiciai */
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer" >Github</a>
                <a href={demo} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
