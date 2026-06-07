import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div className="text-xl font-medium text-slate-400 flex items-center gap-2">
            <motion.span 
              animate={{ rotate: [0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block text-2xl"
            >👋</motion.span> Hello, I'm
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">SAHIL PATEL</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-300 font-semibold">MERN Stack Developer</h2>
          
          <p className="text-lg text-slate-400 max-w-lg">
            I build premium, scalable, and creative web solutions. 
            Turning complex problems into beautiful, intuitive interfaces 
            with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/Sahil_Patel_Resume_Updated.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-medium transition-all transform hover:-translate-y-1 flex items-center gap-2">
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse delay-700"></div>
          
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 backdrop-blur-xl bg-slate-800/50 border border-white/10 p-6 rounded-2xl shadow-2xl"
          >
            <pre className="text-sm md:text-base text-emerald-400 font-mono overflow-x-auto">
              <code>
{`const developer = {
  name: 'SAHIL PATEL',
  role: 'MERN Stack Developer',
  skills: ['React', 'Node.js', 
           'MongoDB', 'Express'],
  passion: 'Building premium web apps'
};`}
              </code>
            </pre>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
