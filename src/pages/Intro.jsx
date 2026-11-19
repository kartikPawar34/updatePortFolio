import React from "react";
import Linkes from "./Linkes";

function Intro() {
  return (
    <div className="L1">
      <h2 className="Hello-heading">Hello,<br/> I’m Kartik Pawar.</h2>
      <p className="welInfo">
        Aspiring Full-Stack Developer | AI/ML Enthusiast
      </p>
      <a href="https://kartikpawar34.github.io/myresume/"><button className="neg-button">Download CV</button></a>
      <Linkes />
    </div>
  );
}

export default Intro;