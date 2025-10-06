function Info() {

  function openCanvaResume() {
    window.open('https://www.canva.com/design/DAGqDEAUMHs/-g6SLLkxF0R4hMA5kbC3WA/view?utm_content=DAGqDEAUMHs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcdab654932', '_blank');
  }

  return (
    <div className="sc">
        <p className="about">
          I’m currently pursuing a Bachelor of Technology in Computer Science and Design at Gyan Ganga Institute of Technology and Sciences, located in Jabalpur, Madhya Pradesh.
        </p> 
      <button onClick={openCanvaResume} className="ResumeButton">Resume</button>
    </div>
  );
}

export default Info;