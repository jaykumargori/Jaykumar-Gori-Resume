import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Freelance from './components/Freelance';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

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

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="mobile-nav-links">
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#freelance" onClick={closeMenu}>Freelance</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" className="mobile-nav-btn-contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>

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
      </main>

      <Contact />
    </>
  );
}

export default App;
