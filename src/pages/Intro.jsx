import React from "react";
import Linkes from "./Linkes";

function Intro() {
  return (
    <div className="L1">
      <h2 className="Hello-heading"><span className="hello">Hello</span>, I’m Kartik Pawar.</h2>
      <p className="welInfo">
        Aspiring IT Professional Full-Stack & Cloud Developer Building scalable web applications.
      </p>
      <a href="https://kartikpawar34.github.io/myresume/"><button className="neg-button">Download CV</button></a>
      <Linkes />
    </div>
  );
}

export default Intro;