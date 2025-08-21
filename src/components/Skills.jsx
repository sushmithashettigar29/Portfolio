import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Skills.css";
import About from "./About";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    smallTablet: { breakpoint: { max: 768, min: 576 }, items: 2 },
    mobile: { breakpoint: { max: 576, min: 0 }, items: 1 },
  };

  const skills = [
    "HTML / CSS",
    "JavaScript",
    "Python",
    "React.js",
    "Bootstrap",
    "Tailwind CSS",
    "Java",
    "AngularJS",
    "MongoDB",
    "NodeJS",
    "Express",
    "Git & GitHub",
    "Figma (UI/UX)",
    "Problem Solving",
    "Time Management",
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <About />
              <h2>Technical Skills</h2>
              <div className="skill-slider-wrapper">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  arrows={false}
                  showDots={false}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  transitionDuration={500}
                  containerClass="skill-slider-container"
                  itemClass="skill-item"
                >
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <h5>{skill}</h5>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
