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

      <div className="container my-3">
        <div className="row align-items-center">
          <div className="col px-0">
            <h2 className="noun my-0 ">noun</h2>
          </div>
          <div className="col-10 px-0">
            {" "}
            <hr className="hr" />
          </div>
        </div>
      </div>

      <section className="Meaning">
        <h2 className="sub-title">Meaning</h2>
        <ul className="meaning-list">
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.{" "}
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.{" "}
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>

        <div className="synonym d-flex align-items-center  ">
          <h2 className="sub-title my-0 me-3">Synonym</h2>
          <p className="synonym-name my-0">electronic keyboard</p>
        </div>
      </section>

      <section className="Verbs my-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col px-0">
              <h2 className="noun my-4 ">verb</h2>
            </div>
            <div className="col-10 px-0">
              {" "}
              <hr className="hr" />
            </div>
          </div>
        </div>
        <h2 className="sub-title">Meaning</h2>
        <ul className="meaning-list">
          <li>To type on a computer keyboard.</li>
          <p className="my-3">“Keyboarding is the part of this job I hate the most.”</p>
        </ul>
      </section>


     
    </div>
  );
}

export default Results;
