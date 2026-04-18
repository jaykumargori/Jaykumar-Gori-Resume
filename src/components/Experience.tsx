import './Experience.css';

const experiences = [
  {
    role: 'Tech Lead',
    company: 'Arcitech',
    location: 'Mumbai',
    period: 'Sep 2025 – Present',
    highlights: [
      'Leading multiple teams (30–45 engineers) across AI, backend, and frontend systems.',
      'Architected real-time screen recording system using WebSockets & AWS ECS, reducing HR effort by 6–7 hours per interview.',
      'Designed container-per-interview architecture, boosting scalability and cutting infrastructure cost by 50%.',
      'Launched Interpret IQ (AI-driven interpreter analytics) for the US market.',
      'Migrated frontend from CRA to Vite, reducing bundle size from 12MB to 800KB.'
    ]
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Arcitech',
    location: 'Mumbai',
    period: 'Jan 2024 – Sep 2025',
    highlights: [
      'Led frontend architecture for Haire AI and built team workflows.',
      'Implemented Firebase + AWS deployments, significantly improving system performance.',
      'Built a robust WebSocket load testing framework utilizing JMeter.'
    ]
  },
  {
    role: 'Flutter Developer',
    company: 'Arcitech',
    location: 'Mumbai',
    period: 'Oct 2023 – Jan 2024',
    highlights: [
      'Built cross-platform mobile applications using Flutter and Dart.',
      'Collaborated closely with cross-functional teams to integrate complex backend services.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'TIFIN',
    location: 'Bangalore',
    period: 'Feb 2022 – Oct 2023',
    highlights: [
      'Built an AI-assistant UI that drastically improved user engagement and app downloads.',
      'Improved rendering performance by 40% using highly optimized state management.'
    ]
  },
  {
    role: 'Software Engineer',
    company: '1stMain (TIFIN)',
    location: 'Bangalore',
    period: 'Nov 2021 – Jan 2022',
    highlights: [
      'Built visually compelling frontends using Gatsby, React.js, and Sanity.io.',
      'Enhanced platform performance for the Magnifi web application.'
    ]
  },
  {
    role: 'Jr. PHP Developer',
    company: 'My Society Club',
    location: '',
    period: 'Jun 2021 – Oct 2021',
    highlights: [
      'Maintained and continuously enhanced a CodeIgniter-based legacy system.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title text-gradient">Career Journey</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <h4 className="experience-company">
                {exp.company} {exp.location && <span>• {exp.location}</span>}
              </h4>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
