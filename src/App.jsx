import { useEffect, useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Download, Monitor, ShieldCheck } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs, FaAws, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiExpress, SiCplusplus } from 'react-icons/si';
import './App.css';

const TiltCard = ({ children, className = '', ...rest }) => {
  const cardRef = useRef(null);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Update glare
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      card.style.transition = 'transform 0.5s ease-out';
    }
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transition = 'transform 0.1s ease-out';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-element ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...rest}
    >
      <div
        className="tilt-glare"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)`,
          opacity: glarePosition.opacity
        }}
      />
      {children}
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isLoading, setIsLoading] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Artificial delay for the skeleton loading animation
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

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

      const heroBg = document.querySelector('.hero-background');
      if (heroBg) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.4}px)`;
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

    const hiddenElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isLoading]);

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

  if (isLoading) {
    return (
      <div className="skeleton-wrapper">
        <div className="skeleton-nav">
          <div className="skeleton-logo skeleton-anim"></div>
          <div className="skeleton-nav-links">
            <div className="skeleton-nav-item skeleton-anim"></div>
            <div className="skeleton-nav-item skeleton-anim"></div>
            <div className="skeleton-nav-item skeleton-anim"></div>
            <div className="skeleton-nav-item skeleton-anim"></div>
          </div>
          <div className="skeleton-logo skeleton-anim" style={{ width: '120px', borderRadius: '50px' }}></div>
        </div>

        <div className="skeleton-container">
          <div className="skeleton-hero">
            <div className="skeleton-hero-content">
              <div className="skeleton-text skeleton-anim" style={{ width: '30%', height: '40px', borderRadius: '50px', marginBottom: '1rem' }}></div>
              <div className="skeleton-title skeleton-anim"></div>
              <div className="skeleton-text skeleton-anim"></div>
              <div className="skeleton-desc skeleton-anim"></div>
              <div className="skeleton-text skeleton-anim" style={{ width: '160px', height: '55px', borderRadius: '50px', marginTop: '1.5rem' }}></div>
            </div>
            <div className="skeleton-image skeleton-anim"></div>
          </div>

          <div className="skeleton-cards">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="skeleton-card skeleton-anim"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={() => scrollTo('home')}>
          &lt;Sahil Patel/&gt;
        </a>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              className={`nav-item ${activeTab === item ? 'active' : ''}`}
              onClick={() => {
                scrollTo(item.toLowerCase());
                setIsMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
          <div className="actions">
            <a href="/Sahil's_Resume.pdf" download className="resume-top">
              <Download size={16} /> Resume
            </a>
          </div>
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
            <div className="unique-hero-content reveal-left delay-100">
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
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilpatel1341@gmail.com" target="_blank" rel="noreferrer" className="unique-social-icon">
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-image-wrapper reveal-right delay-200">
              <div className="image-glow"></div>
              <TiltCard>
                <img src="/hero-coder-male.png" alt="Developer Illustration" className="hero-coder-img" style={{ transform: 'none' }} />
              </TiltCard>
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
          <div className="tech-grid tilt-wrapper">
            {technologies.map((tech, idx) => (
              <TiltCard key={idx} className={`tech-card reveal-scale delay-${(idx % 5 + 1) * 100}`}>
                <div className="tech-icon-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                  {tech.icon}
                </div>
                <span className="tech-label">{tech.name}</span>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="container reveal">
          <h2 className="section-title">Experience</h2>
          <div className="exp-grid tilt-wrapper">
            <TiltCard className="exp-card reveal-left delay-100">
              <div className="exp-icon"><Monitor size={28} /></div>
              <h3 className="exp-role">Front End Developer Intern</h3>
              <p className="exp-company">Toshal Infotech</p>
              <span className="exp-date">Jan 2026 - Mar 2026</span>
              <p className="exp-desc">
                Developed optimized interactive user interfaces using React.js. Collaborated on RESTful APIs and
                state management to enhance application performance. Applied secure coding practices focusing on
                data integrity and user authentication workflows.
              </p>
            </TiltCard>
            <TiltCard className="exp-card reveal-right delay-200">
              <div className="exp-icon"><SiMongodb size={28} /></div>
              <h3 className="exp-role">AI Agent Architect Intern</h3>
              <p className="exp-company">IBM SkillBuild</p>
              <span className="exp-date">Jun 2025 - Jul 2025</span>
              <p className="exp-desc">
                Completed the IBM SkillBuild Architect program. Gained hands-on experience in AI agents and Python workflows.
                Designed AI-driven solutions and applied analytical thinking to real-world datasets.
              </p>
            </TiltCard>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="container reveal">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid tilt-wrapper">
            {projects.map((proj, idx) => (
              <TiltCard key={idx} className={`project-card reveal-scale delay-${(idx % 4 + 1) * 100}`}>
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-techs">
                  {proj.techs.map(tech => <span key={tech}>{tech}</span>)}
                </div>
                <p className="project-desc">{proj.desc}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="container reveal">
          <div className="contact-block">
            <h2>Connect with me</h2>
            <p>I am always open to discussing new engineering opportunities, web solutions, or collaborations.</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilpatel1341@gmail.com" target="_blank" rel="noreferrer" className="contact-email">
              sahilpatel1341@gmail.com
            </a>
          </div>
        </section>

      </main>
    </>
  );
}

export default App;
