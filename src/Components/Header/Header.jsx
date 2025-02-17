import React from "react";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Avishay Avraham</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        {/* <a href="#contact" className="scroll-down">Scroll Down</a> */}
      </div>
    </header>
  );
};

export default Header;
