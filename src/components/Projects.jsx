import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Attendance System',
      description: 'Python-based facial recognition system reducing manual roll-call time by 80% and eliminating proxy attendance.',
      image: '/project1.png',
      tech: ['Python', 'Facial Recognition'],
      github: 'https://github.com/PatelSahil64',
      live: '#'
    },
    {
      title: 'AI-Task-Orchestrator',
      description: 'React.js app that dynamically prioritises workflows, improving task completion rates by 25%.',
      image: '/project2.png',
      tech: ['React.js', 'AI', 'Workflow Orchestration'],
      github: 'https://github.com/PatelSahil64',
      live: '#'
    },
    {
      title: 'Weather Application',
      description: 'Responsive React.js app integrating live API data for real-time, location-based forecasts.',
      image: '/project3.png',
      tech: ['React.js', 'RESTful API'],
      github: 'https://github.com/PatelSahil64',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-slate-800 rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-colors duration-300 shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-emerald-500 hover:text-white transition-colors text-slate-300" aria-label="GitHub">
                    <Code size={24} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-blue-500 hover:text-white transition-colors text-slate-300" aria-label="Live Demo">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-sm font-medium bg-slate-900 text-emerald-400 rounded-full border border-emerald-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a href="https://github.com/PatelSahil64" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 font-bold transition-all transform hover:-translate-y-1">
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
