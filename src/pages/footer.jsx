import React from "react";
import { Link } from "react-router-dom";

function Footers() {
  return (
    <footer className="container L10">
      <div className="infocolumn">
        <div className="column">
          <h2>Contact</h2>
          <p>Phone No: 9685467114</p>
          <p>Telephone No: 7614056695</p>
          <p>
            G-mail: <a href="mailto:kp346949@gmail.com">kp346949@gmail.com</a>
          </p>
          <p>
            Outlook: <a href="mailto:kartik.pawar.319@hotmail.com">kartik.pawar.319@hotmail.com</a>
          </p>
        </div>

        <div className="column">
          <h2>Projects</h2>
          <p>
            <a href="https://kartikpawar34.github.io/ZYNDICO" target="_blank" rel="noopener noreferrer">
              ZYNDICO
            </a>
          </p>
          <p>
            <a href="https://kartikpawar34.github.io/GYM" target="_blank" rel="noopener noreferrer">
              Iron Forest
            </a>
          </p>
        </div>

        <div className="column">
          <h2>Shortcuts</h2>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About Me</Link></p>
          <p><Link to="/projects">Projects</Link></p>
          <p><Link to="/Certificates">Certificates</Link></p>
        </div>
      </div>
    </footer>
  );
}

export default Footers;