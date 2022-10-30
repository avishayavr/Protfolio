import React from 'react'
import "./projects.css"
import img1 from "../../assets/project1.png"


const Projects = () => {
  return (
    <section>
      <h2>My Projects</h2>

      <div className="container projects-container">
        <article className="project-item">
          <div className="project-item-image">
            <img src={img1} alt="" />
          </div>

          <h3>TV-Shows</h3>
          <div className="project-item-cta">
          <a href='' className='btn' target="_blank">Github</a>
          <a href='' className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects