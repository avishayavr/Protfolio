import React from 'react'
import "./projects.css"
import img1 from "../../assets/project2.png"
const data = [{url:img1,title:"Ecommerce", gitHub:"https://github.com/avishayavr/protfolio", liveDemo:"https://anime-products.vercel.app/"}]


const Projects = () => {
  return (
    <section id='projects'>
      <h2>My Projects</h2>

      <div className="container projects-container">
        {data.map(project=>{
        return(
          <article className="project-item">
          <div className="project-item-image">
            <img src={project.url} alt="" />
          </div>

          <h3>{project.title}</h3>
          <div className="project-item-cta">
          <a href={project.gitHub} className='btn' target="_blank">Github</a>
          <a href={project.liveDemo} className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        )
        })}
        
      </div>
    </section>
  )
}

export default Projects