import { 
  SiJavascript, SiTypescript, SiPython, SiDart,
  SiReact, SiNextdotjs, SiNodedotjs, SiFastapi, SiDjango, SiFlutter,
  SiGooglecloud, SiTerraform,
  SiOpenai, SiGraphql, SiGit,
  SiPostgresql, SiRedis, SiFirebase, SiApachekafka, SiCelery
} from 'react-icons/si';

import { FaServer, FaCodeBranch, FaCogs, FaRobot, FaAws } from 'react-icons/fa';

import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: 'code',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
      { name: 'Python', icon: <SiPython color="#3776AB" /> },
      { name: 'Dart', icon: <SiDart color="#0175C2" /> }
    ]
  },
  {
    title: 'Frameworks',
    icon: 'layers',
    skills: [
      { name: 'React.js', icon: <SiReact color="#61DAFB" /> },
      { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
      { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
      { name: 'FastAPI', icon: <SiFastapi color="#009688" /> },
      { name: 'Django', icon: <SiDjango color="#092E20" /> },
      { name: 'Flutter', icon: <SiFlutter color="#02569B" /> }
    ]
  },
  {
    title: 'Cloud & Infra',
    icon: 'cloud',
    skills: [
      { name: 'AWS (ECS, SES, SNS)', icon: <FaAws color="#FF9900" /> },
      { name: 'GCP', icon: <SiGooglecloud color="#4285F4" /> },
      { name: 'Terraform', icon: <SiTerraform color="#844FBA" /> },
      { name: 'Firebase', icon: <SiFirebase color="#f5820b" /> }
    ]
  },
  {
    title: 'Systems & Arch',
    icon: 'hub',
    skills: [
      { name: 'Microservices', icon: <FaCogs color="#ffb695" /> },
      { name: 'WebSockets', icon: <FaServer color="#414edc" /> },
      { name: 'Multi-tenant SaaS', icon: <FaCodeBranch color="#06b6d4" /> },
      { name: 'Real-time', icon: <FaCogs color="#8b5cf6" /> }
    ]
  },
  {
    title: 'Data & Eventing',
    icon: 'storage',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
      { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
      { name: 'Firestore', icon: <SiFirebase color="#FFCA28" /> },
      { name: 'Apache Kafka', icon: <SiApachekafka color="#ffffff" /> },
      { name: 'Celery', icon: <SiCelery color="#37814A" /> }
    ]
  },
  {
    title: 'AI & Ingestion',
    icon: 'psychology',
    skills: [
      { name: 'OpenAI (GPT-4/5)', icon: <SiOpenai color="#ffffff" /> },
      { name: 'Claude Models', icon: <FaRobot color="#d4a373" /> }, 
      { name: 'AI Architecture', icon: <FaCogs color="#e5e2e1" /> }
    ]
  },
  {
    title: 'Dev Tools',
    icon: 'build',
    skills: [
      { name: 'Git', icon: <SiGit color="#F05032" /> },
      { name: 'CI/CD', icon: <FaCodeBranch color="#ffffff" /> },
      { name: 'GraphQL', icon: <SiGraphql color="#E10098" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header-flex">
        <div>
          <h2 className="section-eyebrow">Expertise</h2>
          <h3 className="section-title text-gradient">Tech Stack & Mastery</h3>
        </div>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card group delay-100">
            <span className="material-symbols-outlined skill-icon group-hover:scale-110">{category.icon}</span>
            <h4 className="skill-category-title">{category.title}</h4>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-list-item real-icon-item">
                  <div className="skill-real-icon-wrapper">
                    {skill.icon}
                  </div>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
