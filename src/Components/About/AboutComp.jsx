import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";

const AboutComp = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about-content">
          {/* <div className="about-cards">
            <article className='about-card'>
              <h5>Experience</h5>
            </article>
          </div> */}

          <p>Highly motivated and passionate full-stack web developer.</p>
          <p>
            I have a background in both front-end and back-end development,
            using technologies such as HTML, CSS, JavaScript, and Node.js.
          </p>
          <p>
            I am always eager to learn new skills and techniques to enhance my
            abilities as a developer and provide the best possible solutions for
            my clients.
          </p>
          <p>
            I believe in collaboration and teamwork, and enjoy working with
            others to bring projects to life.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutComp;
