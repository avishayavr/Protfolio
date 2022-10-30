import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"

const ContactComp = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          {/* email option */}
          <article className="contact-option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>avishay99a@gmail.com</h5>
            <a href='mailto:avishay99a@gmail.com'>Send a message</a>
          </article>
          {/* whatsapp option */}
          <article className="contact-option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+972***</h5>
            <a href='http://api.whatsapp.com/send?phone+9720504335393'>Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default ContactComp