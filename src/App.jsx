import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">About</section>
      <section id="Projects">Projects</section>
      <section id="Services">Services</section>
      <section id="Certificates">Certificates</section>
      <section id="Resume">Resume</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
