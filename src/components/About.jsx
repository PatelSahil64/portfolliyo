import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/avatar.png" alt="Sahil Patel" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <h3 className="text-3xl font-semibold text-white">Hi, I'm SAHIL PATEL</h3>
            <p className="text-blue-400 font-medium text-xl">
              MERN Stack Developer and Computer Science graduate (May 2026) with practical experience building and deploying full-stack web applications.
            </p>
            <p>
              I have completed a frontend developer role at Toshal Infotech, integrating RESTful APIs and applying secure coding practices across production-grade UI components.
            </p>
            <p>
              Certified AWS Cloud Practitioner with hands-on exposure to AI agent architecture through IBM SkillBuild. Skilled in JavaScript, C++, Java, and cybersecurity principles, with a strong focus on responsive design, cross-browser compatibility, and clean, maintainable code.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-white/10 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <span className="block text-3xl font-bold text-blue-400 mb-1">AWS</span>
                <span className="text-sm font-medium text-slate-400">Certified</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-white/10 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <span className="block text-3xl font-bold text-emerald-400 mb-1">8.07</span>
                <span className="text-sm font-medium text-slate-400">CGPA (B.E. CSE)</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-white/10 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <span className="block text-3xl font-bold text-purple-400 mb-1">80%</span>
                <span className="text-sm font-medium text-slate-400">Time Saved (AI)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
