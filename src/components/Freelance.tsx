import { FiExternalLink } from 'react-icons/fi';
import './Freelance.css';

const freelanceProjects = [
  {
    title: 'Dr. Finance UAE',
    description: 'A comprehensive branding and financial consulting platform serving clients in the United Arab Emirates, designed for optimal lead generation.',
    link: 'https://www.drfinanceuae.com/',
    role: 'Full Stack Development',
  },
  {
    title: 'Shree Ashtanetradham',
    description: 'Digital presence and information portal for the Shree Ashtanetra Hanumanjidada Temple located in Kutch, establishing their online community footprint.',
    link: 'https://ashtanetradham.in/',
    role: 'Web Development & UI/UX',
  },
  {
    title: 'Devi Creation',
    description: 'A modern heritage boutique brand catalog featuring artisanal handmade bags and accessories, crafted with premium aesthetic styling.',
    link: 'https://devi-creation.vercel.app/',
    role: 'Frontend & UI Architecture',
  }
];

const Freelance = () => {
  return (
    <section id="freelance" className="freelance-section">
      <div className="section-header-flex">
        <div>
          <h2 className="section-eyebrow">Independent Work</h2>
          <h3 className="section-title text-gradient">Freelance Projects</h3>
        </div>
      </div>
      <div className="freelance-grid">
        {freelanceProjects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="freelance-card glass-panel group delay-100">
            <div className="freelance-content">
              <h4 className="freelance-title">{project.title}</h4>
              <p className="freelance-role">{project.role}</p>
              <p className="freelance-description">{project.description}</p>
            </div>
            <div className="freelance-action">
              <span className="live-pill">Live Site</span>
              <FiExternalLink className="ext-icon group-hover:scale-125 transition-transform" />
            </div>
            <div className="freelance-hover-glow"></div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Freelance;
