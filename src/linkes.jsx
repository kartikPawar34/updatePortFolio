import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

function Linkes() {
  return (
    <>
      <div className="container">
        <a href="http://www.linkedin.com/in/kartik-pawar346949">
          <img src={linkedin} alt="LinkedIn logo" className="Social_Links"/>
        </a>
        <a href="http://www.github.com/yourusername">
          <img src={github} alt="GitHub logo" className="Social_Links"/>
        </a>
      </div>
    </>
  );
}

export default Linkes;