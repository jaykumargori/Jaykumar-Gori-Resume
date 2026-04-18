import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-intro">
          <h2 className="section-eyebrow">Technical Leader</h2>
          <h3 className="about-title text-gradient">Engineering Leadership in Mumbai</h3>
        </div>
        <div className="about-content">
          <p className="about-description">
            With over <span className="highlight-text">5 years of experience</span> in the digital trenches, 
            I currently lead a high-velocity team of <span className="highlight-text">30+ engineers</span>. 
            My focus is the convergence of AI and real-time enterprise architecture.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-number">30+</p>
              <p className="stat-label">Engineers Led</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">5+</p>
              <p className="stat-label">Years Exp</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">15k</p>
              <p className="stat-label">User Reach</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">50%</p>
              <p className="stat-label">Cost Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
