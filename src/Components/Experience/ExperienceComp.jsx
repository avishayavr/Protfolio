import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const ExperienceComp = () => {
  return (
    <section id="experience">
      <h2>What Skills I Have</h2>

      <div className="container experience-container">
        <div className="experience-front">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>HTML</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>CSS</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>Tailwind</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>React</h4>
            </article>
          </div>
        </div>
        {/* end of front */}
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>Node JS - Express</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>SQL - MySQL</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>NoSQL - MongoDB</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons" />
              <h4>Python - Flask</h4>
            </article>
          </div>
        </div>
        {/* end of back */}
      </div>
    </section>
  );
};

export default ExperienceComp;
