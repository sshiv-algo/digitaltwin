import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative px-6 md:px-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[2.5rem] relative overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF] to-[#8A5DFF] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 px-8 py-20 md:py-28 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Start Building Your <br/> Better Self Today.
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Join thousands of high performers using Digital Twin to unlock their full potential and maintain sustainable productivity.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/register" className="bg-white text-[#1E293B] hover:bg-slate-50 transition-colors px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 shadow-2xl hover:-translate-y-1 transform duration-300">
              Launch App <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20 text-white transition-all px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2">
              <Github className="w-5 h-5" /> View GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
