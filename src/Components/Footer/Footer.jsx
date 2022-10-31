import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>ATLAS</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href='https://linkedin.com'><BsLinkedin/></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; ATLAS Design. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer