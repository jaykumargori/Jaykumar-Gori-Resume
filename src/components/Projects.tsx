import './Projects.css';

const projects = [
  {
    title: 'Haire AI',
    description: 'Real-time AI interview platform utilizing generative AI for technical screening and candidate analysis.',
    tech: ['React', 'WebRTC', 'AWS ECS', 'OpenAI'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUulyvvSdYCCkIL7vynGbJB5R5oIHX1C6cO5pJs9nzydOnGRjBMNpVSt8Q79P3I_LApjEpi9syn7x92YaO1779VTEWPGqo38IjU4kjMhp-Z6HAG3qFdpS0Og_T-W5bzPZOl4lR-BLVj4WbThL-Sb59_MC0bq7yvccy4ujoIRrVFU4eLsbSauNuRaZnBOHGqPAjTGPYn-ti_flefvOmTigTKNG1S83QtOOSLldQtGn56y4RtUt6aeOPuaKtzDacLt9mbgpJSdDjjPIt',
    colSpan: '1',
    link: 'https://haire.ai/'
  },
  {
    title: 'Ag Brain',
    description: 'SaaS platform for high-performance payroll and employee lifecycle management across multiple entities.',
    tech: ['Next.js', 'PostgreSQL', 'AWS'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd4wmN_RdBTX3WyNXAUnrpDXniCqEfip8vyjfv0JZpsDBIimk74KH2-zo1a9ewsIFK-4-IX__diJpRA8VFhCkppYlKs1SXRdwgHvcGiGUYXc8_aZ37WjqFnnOAjLMA643FdUJxLMs80QyvEX9eCqzMAUsSqxyw9awSDrbpdXCamkjWE0X1V6kjO19HsBK2TTVTogUNDPIu_gqk4D6nGt9YokCTKIIMJEN2_tUKh2NfsALzpaDV2UqpoJnOC2gJmPUfQLFOX3zo4C4A',
    colSpan: '1',
    link: 'https://ag-brain.com/'
  },
  {
    title: 'BPO Box',
    description: 'Advanced analytics engine for BPO operations, providing real-time KPI tracking and predictive modeling.',
    tech: ['Python', 'BigQuery', 'React'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAazcDWwfF25Qd_t-fy7gMHY5HVMtEfNw-bRdr9x77oEmCopnQ6cjDvdpdwVZCLw4yMNzKAIZM7oeB652iwbbwz_te_LXIkHXVe5YOdwNtkBEipw5w32DOyw1JchkrpiUWePdNqjVNpbKUGV-VTT8BEFtM7z47IyLeeaRW4Qc2jrArArdmvTE65P9MVWsTgizrtJOZJ0KxJKWyXcCNzZjqwcEMbfwwcdyUTsASIg42aL6G79BH2tMJLvAsTCsz8nJPx5vdf5Y4bk1TR',
    colSpan: '1'
  },
  {
    title: 'Jumbo UAE',
    description: 'Real-time omnichannel campaign manager for UAE\'s leading electronics retailer, handling millions of touchpoints.',
    tech: ['TypeScript', 'Redis', 'GCP'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo1hlAvuKO-UXoApTzcoPQW4zIg7Q8qAXa0zvmkl0CaYc2azNXk36jbdrlPDX3OO8VCgm6OtGNIe_ttEOq3a2W40JeNCu8boRKIClOXO4uGgRFnGVjob0Oqq1O_UQP2qDrrR1oHq_MshEt1mhZuu82oHNY1wpbJK6V9zN14KGKeKqcD2u2Mm4OKu_mz7iMk9AofA4AK5xdESKO4-ZoKOmFFHZsKtHd9JGMlGOpelFen0gLto2QwLuo0DiT8r-0s-H6KC0Fs9HwptMo',
    colSpan: '2'
  },
  {
    title: 'Interpret IQ',
    description: 'Sentiment and intent analysis tool using custom NLP models to decode complex customer interactions.',
    tech: ['PyTorch', 'FastAPI', 'MongoDB'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgyG80onDcXg_EUIYs8HqZF6_lLFp85lrg7octJ7-ScDOXkhS-ibRQ54OL6iDnOzFw_kUi0OJtC2Ha2Ae9rhl4UBCccjrs6SIIPNqbZ0kk3IedLMhHrTRJDQc-zoiUQ3-_XSeAotLwsxOjiP9sKjFzDfCgSX5LFXvJRkPiBcHacMR4beEjTLKhLXkUEszIgen02LmzVoQayU4111g9OELQ0lJyId7U0b5IQoFo-cJDuIEbmd8eFYxR9GP8d7sCOCfxGKQ4S6YF2Fa9',
    colSpan: '1'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header-flex">
        <div>
          <h2 className="section-eyebrow">Case Studies</h2>
          <h3 className="section-title text-gradient">Featured Architecture</h3>
        </div>
        <p className="section-subtitle">
          A selection of large-scale systems engineered for performance and scalability.
        </p>
      </div>
      <div className="bento-grid">
        {projects.map((project, index) => {
          const CardContent = (
            <>
              <div className="bento-image-wrapper">
                <img src={project.image} alt={project.title} className="bento-image" />
                <div className="bento-overlay"></div>
              </div>
              <div className="bento-content">
                <div className="bento-header">
                  <h4 className="bento-title">{project.title}</h4>
                  {project.link && <span className="material-symbols-outlined bento-icon">open_in_new</span>}
                </div>
                <p className="bento-description">{project.description}</p>
              </div>
            </>
          );

          return project.link ? (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`bento-card ${project.colSpan === '2' ? 'col-span-2' : ''}`}
            >
              {CardContent}
            </a>
          ) : (
            <div 
              key={index} 
              className={`bento-card ${project.colSpan === '2' ? 'col-span-2' : ''}`}
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
