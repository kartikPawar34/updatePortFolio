import Skills from "./ServiceSkills";
import Linkes from "./linkes";
import Projects from "./projects"
import ProjectGallery from "./printArtwork";
import ConnectMeSection from "./GetInTouch";
import Info from "./AboutSec";
import CertificateSlideshow from "./printCert";
import SkillsSection from "./SkillsChart";
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
      </div>
      <div className="src34 scrollUp-1">
          <div className="KeyInfo">
            <h1 class="SubHeading gol23 ">About</h1>
               <Info/>
               <SkillsSection/>
          </div>   
      </div>
      <div className="src34 scrollUp-2">
            <h2 class="SubHeading-s">Services & Learning Journey</h2>
            <Skills/>
      </div>
      <div className="src34 scrollUp-3">
            <h1 class="SubHeading ">Certifications</h1>
            <CertificateSlideshow/>
      </div>
      <div className="src34 scrollUp-4">
            <h1 class="SubHeading-s">Projects</h1>
            <Projects/>
      </div>
      <div className="src34 scrollUp-5">
            <h2 class="SubHeading">Sketchbook & Art</h2>
            <ProjectGallery/>
      </div>
      <div className="src34 scrollUp-6">
        <ConnectMeSection/>
      </div> 
      <footer>{new Date().getFullYear()}Portfolio Belongs To Kartik Pawar</footer>

    </>
  )
}


export default Portfolio; 