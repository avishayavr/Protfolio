import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.png"

const AboutComp = () => {
  return (
    <section id='about'>
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
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga itaque, vitae in ratione saepe amet placeat quae aliquam quos suscipit sit eligendi similique, excepturi incidunt, dolorem facere distinctio? Quisquam, repudiandae?</p>

          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default AboutComp