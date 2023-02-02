import React from "react";
import {
  Header,
  Nav,
  AboutComp,
  ExperienceComp,
  Services,
  Projects,
  Testimonials,
  ContactComp,
  Footer,
} from "./Components";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <AboutComp />
      <ExperienceComp />
      {/* <Services /> */}
      <Projects />
      {/* <Testimonials /> */}
      <ContactComp />
      <Footer />
    </>
  );
};

export default App;
