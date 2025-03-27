import "./app.scss";
import About from "./components/about/About";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Certificates">
        <Certificates />
      </section>
      <section id="Resume">
        <Resume />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
