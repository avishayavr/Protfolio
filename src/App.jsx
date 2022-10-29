import React from 'react'
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import About from "./Components/About/AboutComp"
import Experience from "./Components/Experience/ExperienceComp"
import Services from "./Components/Services/Services"
import Portfolio from "./Components/Portfolio/Portfolio"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/ContactComp"
import Footer from "./Components/Footer/Footer"



const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App