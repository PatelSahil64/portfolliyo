import React from 'react';
import { Database, Server, Layout, FileJson, Layers, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <Layout size={28} className="text-blue-400" />,
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Design'],
    },
    {
      category: 'Backend & DB',
      icon: <Server size={28} className="text-emerald-400" />,
      technologies: ['Node.js', 'Express.js', 'PHP', 'MongoDB', 'RESTful APIs'],
    },
    {
      category: 'Languages',
      icon: <Database size={28} className="text-purple-400" />,
      technologies: ['Python', 'C', 'C++', 'Java', 'JavaScript'],
    },
    {
      category: 'Tools & Other',
      icon: <Code2 size={28} className="text-amber-400" />,
      technologies: ['AWS', 'Git', 'GitHub', 'Cybersecurity Principles', 'Problem Solving'],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">My Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-slate-800 border border-white/5 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-900 rounded-xl shadow-inner">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-3">
                {skillGroup.technologies.map((tech, idx) => (
                  <li key={idx} className="flex items-center text-slate-300 font-medium">
                    <FileJson size={16} className="text-slate-500 mr-3" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
