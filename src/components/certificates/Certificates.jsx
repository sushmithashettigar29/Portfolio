import "./Certificates.scss";

function Certificates() {
  return (
    <div className="certificates">
      <h1>Certificates</h1>
      <hr />
      <div className="card-container">
        <div className="certi-card">
          <img src="/css-battle.png" alt="Certificate" />
        </div>{" "}
        <div className="certi-card">
          <img src="/webdev.png" alt="Certificate" />
        </div>{" "}
        <div className="certi-card">
          <img src="/fusion-hack.png" alt="Certificate" />
        </div>{" "}
        <div className="certi-card">
          <img src="/uiux.png" alt="Certificate" />
        </div>        <div className="certi-card">
          <img src="/developher.png" alt="Certificate" />
        </div>{" "}
        <div className="certi-card">
          <img src="/mongodb.png" alt="Certificate" />
        </div>

      </div>
    </div>
  );
}

export default Certificates;
