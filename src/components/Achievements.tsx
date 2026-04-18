import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-grid">
        <div className="glass-panel achievement-card">
          <div className="achievement-icon icon-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="achievement-content">
            <h4 className="achievement-title">Employee of the Month</h4>
            <p className="achievement-description">
              Recognized for exceptional leadership and architectural contributions during critical project deliveries.
            </p>
          </div>
        </div>
        <div className="glass-panel achievement-card">
          <div className="achievement-icon icon-tertiary">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
          </div>
          <div className="achievement-content">
            <h4 className="achievement-title">Silver Club Recognition</h4>
            <p className="achievement-description">
              Elite recognition for driving innovation and maintaining 99.9% system uptime across enterprise deployments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
