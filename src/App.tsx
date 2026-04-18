import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <nav className="navbar glass-panel">
        <a href="#hero" className="nav-brand">Jaykumar</a>
        <div className="nav-links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#freelance">Freelance</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-btn-contact">Contact</a>
        </div>
      </nav>

      <main>
        <div className="section-wrapper">
          <Hero />
        </div>
        <div className="section-wrapper bg-alt">
          <About />
        </div>
        <div className="section-wrapper">
          <Skills />
        </div>
        <div className="section-wrapper bg-light">
          <Projects />
        </div>
        <div className="section-wrapper">
          <Freelance />
        </div>
        <div className="section-wrapper bg-alt">
          <Experience />
        </div>
        <div className="section-wrapper bg-alt">
          <Achievements />
        </div>
        <div className="section-wrapper bg-light">
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
