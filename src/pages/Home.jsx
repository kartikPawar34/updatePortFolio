import React from "react";
import Intro from "./Intro";
import Aboutme from "./AboutMe";
import Skillcards from "./Skillcard";
import Projects from "./Project";
import Certificate from "./certificate";
import Footers from "./footer";
import Artlist from "./Artlist";

function Portfolio() {
  return (
    <div className="mainlinking">
      <Intro />
      <Aboutme />
      <Skillcards />
      <Projects />
      <Certificate/>
      <Artlist/>
      <Footers/>
    </div>
  );
}

export default Portfolio;