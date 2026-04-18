import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section animate-fade-in delay-400">
      <div className="contact-container glass-panel">
        <h2 className="section-title text-gradient">Get In Touch</h2>
        <p className="contact-text">
          Currently open to new opportunities, collaborations, or consulting. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="contact-links">
          <a href="mailto:hello@example.com" className="btn btn-primary">Say Hello</a>
          <a href="#" className="contact-social-link">LinkedIn</a>
          <a href="#" className="contact-social-link">GitHub</a>
        </div>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jaykumar Gori.</p>
      </footer>
    </section>
  );
};

export default Contact;
