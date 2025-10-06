import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import instagram from'./assets/instagram.png';

function Linkes() {
  return (
    <>
      <div className="container">
        <a href="http://www.linkedin.com/in/kartik-pawar346949">
          <img src={linkedin} alt="LinkedIn logo" className="Social_Links"/>
        </a>
        <a href="https://github.com/kartikPawar34">
          <img src={github} alt="GitHub logo" className="Social_Links"/>
        </a>
        <a href="https://www.instagram.com/arte_playlist/">
          <img src={instagram} alt="Instagram logo" className="Social_Links"/>
        </a>
      </div>
    </>
  );
}

export default Linkes;