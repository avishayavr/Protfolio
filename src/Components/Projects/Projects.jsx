import React from 'react'
import "./projects.css"
import img1 from "../../assets/project2.png"
import img2 from "../../assets/project1.png"
const data = [{url:img1,title:"Ecommerce", gitHub:"https://github.com/avishayavr/Anime-Products", liveDemo:"https://anime-products.vercel.app/"},
{url:img2,title:"TV-shows", gitHub:"https://github.com/avishayavr/TV-Shows", liveDemo:"https://tv-shows-phi.vercel.app/"}]


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
