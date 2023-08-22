import "./Results.css";
import playButton from "../assets/images/icon-play.svg";

function Results() {
  return (
    <div className="Results">
      <div className="container-fluid px-0">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="column">
            <h1 className="word-title">keyboard</h1>
            <span className="audio-word"> /&quot;ki:bc:d/ </span>
          </div>
          <div className="column">
            
            <img src={playButton} alt="playbutton" className="playButton" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
