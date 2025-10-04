import Skills from "./ServiceSkills";
import Linkes from "./linkes";
import Projects from "./projects"
import ProjectGallery from "./printArtwork";
import ConnectMeSection from "./GetInTouch";
import Info from "./AboutSec";
import CertificateSlideshow from "./printCert";
function Portfolio (){
  return (
    <>
      <div className="FixWelPage">
          <p class="Hello-heading">
              Hello
          </p>
          <p className="welInfo">
          My name is Kartik Pawar. A design-driven Full-Stack Developer in training. I build visually stunning (React/CSS) front-ends and engineer the scalable Python (Flask/Django) back-ends that power them.
          </p>
          <Linkes/>
          <CertificateSlideshow/>
      </div>
      <div className="src34 scrollUp-1">
          <div className="KeyInfo">
            <h1 class="SubHeading gol23">About</h1>
               <Info/>
          </div>   
      </div>
      <div className="src34 scrollUp-2">
            <h2 class="SubHeading-s">Services & Learning Journey</h2>
            <Skills/>
      </div>
      <div className="src34 scrollUp-3">
            <h1 class="SubHeading">Projects</h1>
            <Projects/>
      </div>
      <div className="src34 scrollUp-4">
            <h2 class="SubHeading-s">Sketchbook & Concept Art</h2>
            <ProjectGallery/>

      </div>
      <div className="src34 scrollUp-5">
        
        <ConnectMeSection/>
      </div> 
      <footer>{new Date().getFullYear()}Portfolio Belongs To Kartik Pawar</footer>

    </>
  )
}


export default Portfolio; 