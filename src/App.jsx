import { useEffect, useState } from 'react';
import { Download, Monitor, ShieldCheck } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs, FaAws, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiExpress, SiCplusplus } from 'react-icons/si';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'About', 'Experience', 'Projects', 'Contact'];
      for (const section of sections) {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveTab(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const technologies = [
    { name: 'React.js', icon: <FaReact size={32} /> },
    { name: 'Node.js', icon: <FaNodeJs size={32} /> },
    { name: 'Express.js', icon: <SiExpress size={32} /> },
    { name: 'MongoDB', icon: <SiMongodb size={32} /> },
    { name: 'Firebase', icon: <SiFirebase size={32} /> },
    { name: 'Python', icon: <FaPython size={32} /> },
    { name: 'AWS Cloud', icon: <FaAws size={32} /> },
    { name: 'Java', icon: <FaJava size={32} /> },
    { name: 'C++', icon: <SiCplusplus size={32} /> },
    { name: 'PHP', icon: <FaPhp size={32} /> }
  ];

  const projects = [
    {
      title: 'Smart Attendance System',
      desc: 'An AI-powered attendance system achieving 95% accuracy in object detection using real-time computer vision algorithms.',
      techs: ['React', 'Node.js', 'CV'],
      link: '#'
    },
    {
      title: 'AI-Task-Orchestrator',
      desc: 'A robust cloud-based task management solution architected using Python and orchestrated over AWS infrastructure.',
      techs: ['React', 'FireBase', 'Node-Js'],
      link: '#'
    },
    {
      title: 'Spam Email Classifier',
      desc: 'Machine learning classification model trained to accurately filter and detect spam emails from standard communication.',
      techs: ['Python', 'ML'],
      link: '#'
    },
    {
      title: 'Weather Application',
      desc: 'Responsive web application providing real-time weather analytics mapped through secure RESTful API integrations.',
      techs: ['React', 'REST APIs'],
      link: '#'
    }
  ];

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={() => scrollTo('home')}>
          &lt;Sahil Patel/&gt;
        </a>
        <div className="nav-links">
          {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              className={`nav-item ${activeTab === item ? 'active' : ''}`}
              onClick={() => scrollTo(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="actions">
          <a href="/Sahil's_Resume.pdf" download className="resume-top">
            <Download size={16} /> Resume
          </a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="unique-hero container">
          <div className="hero-background">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
          </div>

          <div className="hero-grid">
            <div className="unique-hero-content reveal">
              <div className="badge-wrapper">
                <span className="hero-badge">Welcome to my portfolio</span>
              </div>
              <h1 className="unique-hero-name">
                <span className="text-transparent">Sahil Patel</span>
              </h1>
              <h2 className="unique-hero-role">
                Crafting <span className="highlight-role">Secure</span> &amp; <span className="highlight-role">Scalable</span>
                <br /> Digital Experiences
              </h2>
              <p className="unique-hero-bio">
                Computer Science Engineering student specializing in secure software development.
                Bridging robust user experiences with secure AWS cloud infrastructures.
              </p>
              <div className="unique-hero-actions">
                <a href="#projects" className="primary-btn" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
                  View Projects
                </a>
                <div className="unique-hero-links">
                  <a href="https://www.linkedin.com/in/sahil-patel-387411380/" target="_blank" rel="noreferrer" className="unique-social-icon">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://github.com/PatelSahil64" target="_blank" rel="noreferrer" className="unique-social-icon">
                    <FaGithub size={24} />
                  </a>
                  <a href="mailto:sahilpatel1341@gmail.com" className="unique-social-icon">
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-image-wrapper reveal">
              <div className="image-glow"></div>
              <img src="/hero-coder-male.png" alt="Developer Illustration" className="hero-coder-img" />
            </div>
          </div>
        </section>

        {/* ABOUT / TECHNOLOGIES SECTION */}
        <section id="about" className="container reveal">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I believe in writing clean, secure, and efficient code to tackle complex real-world challenges.
            Proficient in multiple programming languages including Python, Java, and C++, paired with hands-on
            experience in full-stack web technologies like React.js and Node.js. My knowledge of AWS cloud
            services complements a solid foundation in cybersecurity.
          </p>

          <h3 className="section-title" style={{ marginTop: '2rem', fontSize: '2rem' }}>Technologies</h3>
          <div className="tech-grid">
            {technologies.map((tech, idx) => (
              <div key={idx} className="tech-card">
                <div className="tech-icon-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                  {tech.icon}
                </div>
                <span className="tech-label">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="container reveal">
          <h2 className="section-title">Experience</h2>
          <div className="exp-grid">
            <div className="exp-card">
              <div className="exp-icon"><Monitor size={28} /></div>
              <h3 className="exp-role">Front End Developer Intern</h3>
              <p className="exp-company">Toshal Infotech</p>
              <span className="exp-date">Jan 2026 - Mar 2026</span>
              <p className="exp-desc">
                Developed optimized interactive user interfaces using React.js. Collaborated on RESTful APIs and
                state management to enhance application performance. Applied secure coding practices focusing on
                data integrity and user authentication workflows.
              </p>
            </div>
            <div className="exp-card">
              <div className="exp-icon"><SiMongodb size={28} /></div>
              <h3 className="exp-role">AI Agent Architect Intern</h3>
              <p className="exp-company">IBM SkillBuild</p>
              <span className="exp-date">Jun 2025 - Jul 2025</span>
              <p className="exp-desc">
                Completed the IBM SkillBuild Architect program. Gained hands-on experience in AI agents and Python workflows.
                Designed AI-driven solutions and applied analytical thinking to real-world datasets.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="container reveal">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-techs">
                  {proj.techs.map(tech => <span key={tech}>{tech}</span>)}
                </div>
                <p className="project-desc">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="container reveal">
          <div className="contact-block">
            <h2>Connect with me</h2>
            <p>I am always open to discussing new engineering opportunities, web solutions, or collaborations.</p>
            <a href="mailto:sahilpatel1341@gmail.com" className="contact-email">
              sahilpatel1341@gmail.com
            </a>
          </div>
        </section>

      </main>
    </>
  );
}

export default App;
