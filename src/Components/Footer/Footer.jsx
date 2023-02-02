import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>Avishay Avraham</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href='https://www.linkedin.com/in/avishay-avraham-26752b233/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BxoSN3ZNMRXypwh48nRSezw%3D%3D'><BsLinkedin/></a>
        <a href='https://github.com/avishayavr'><FaGithub/></a>
        <a href='https://www.facebook.com/profile.php?id=100001827807418'><FaFacebookF/></a>
      </div>
    </footer>
  )
}

export default Footer