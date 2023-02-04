import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"


const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href='http://linkedin.com' target=""_blank><BsLinkedin/></a>
        <a href='http://github.com' target=""_blank><FaGithub/></a>
        <a href='https://www.facebook.com/profile.php?id=100001827807418' target=""_blank><FaFacebookF/></a>
    </div>
  )
}

export default HeaderSocials