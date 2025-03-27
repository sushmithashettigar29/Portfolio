import "./resume.scss";

function Resume() {
  return (
    <div className="resume">
      <div className="resumeContent">
        <h1>Technologies I Work With</h1>
        <hr className="tech-hr" />
        <div className="techContainer">
          <div className="box">
            <img src="/html.png" alt="" />
            <h6>HTML</h6>
          </div>
          <div className="box">
            <img src="/css.png" alt="" />
            <h6>CSS</h6>
          </div>
          <div className="box">
            <img src="/js.png" alt="" />
            <h6>JS</h6>
          </div>
          <div className="box">
            <img src="/reactjs.png" alt="" />
            <h6>ReactJs</h6>
          </div>
          <div className="box">
            <img src="/mongo.png" alt="" />
            <h6>MongoDB</h6>
          </div>
          <div className="box">
            <img src="/nodejs.png" alt="" />
            <h6>NodeJs</h6>
          </div>
          <div className="box">
            <img src="/express.png" alt="" />
            <h6>Express</h6>
          </div>
          <div className="box">
            <img src="/angular.png" alt="" />
            <h6>Angular</h6>
          </div>
          <div className="box">
            <img src="/java.png" alt="" />
            <h6>Java</h6>
          </div>
          <div className="box">
            <img src="/figma.png" alt="" />
            <h6>Figma</h6>
          </div>
        </div>
        <h1>Experience</h1>
        <hr className="exp-hr" />
        <div className="expContainer">
          <div className="expbox">
            <div className="icon">
              <img src="/job.png" alt="" />
            </div>
            <div className="detail">
              <h6>Nov - Dec 2024</h6>
              <h4 className="company">Infosys Springboard</h4>
              <p className="position">Angular Full-stack Intern</p>
              <ul>
                <li>
                  Developing the front-end of the BidNow platform using Angular,
                  focusing on creating interactive and dynamic user interfaces.{" "}
                </li>
                <li>
                  Implementing real-time updates and enhancing user engagement
                  for a seamless auction experience.{" "}
                </li>
                <li>
                  Collaborating with team members to optimize UI/UX design and
                  ensure responsiveness across devices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="resumeImage">
        <img src="/resumepage.png" alt="" />
        <button>Download Resume</button>
      </div>
    </div>
  );
}

export default Resume;
