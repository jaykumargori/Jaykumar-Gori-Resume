import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section animate-fade-in" id="hero">
      <div className="hero-content">
        <h2 className="hero-greeting">Hi, I'm</h2>
        <h1 className="hero-name text-gradient">Jaykumar Gori</h1>
        <h3 className="hero-title">Tech Lead & Architecture Specialist</h3>
        <p className="hero-subtitle">
          5+ years building scalable SaaS, AI-driven platforms, and robust cloud-native 
          solutions. Specialized in real-time architectures and multi-tenant systems.
        </p>
        <div className="hero-cta delay-200">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="hero-image-wrapper delay-300">
        <div className="hero-glass-blob blob-1"></div>
        <div className="hero-glass-blob blob-2"></div>
        <img src="/avatar.png" alt="Jaykumar Avatar" className="hero-avatar animate-float" />
      </div>
    </section>
  );
};

export default Hero;
