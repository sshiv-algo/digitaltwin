import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#5B8CFF]/20 rounded-full blur-[120px] landing-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8A5DFF]/15 rounded-full blur-[150px] landing-blob-delay"></div>
        <div className="absolute inset-0 landing-grid-bg opacity-30"></div>
        
        {/* Particles */}
        <div className="landing-particle w-2 h-2 top-1/4 left-1/3 animate-pulse-glow"></div>
        <div className="landing-particle w-1.5 h-1.5 top-1/3 right-1/4 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="landing-particle w-3 h-3 bottom-1/3 left-1/4 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="landing-label"
          >
            Productivity Reimagined
          </motion.div>
          
          <h1 className="landing-section-title mb-6">
            Meet Your <br/>
            <span className="landing-gradient-text">Digital Twin.</span>
          </h1>
          
          <p className="landing-section-subtitle mb-10 text-lg">
            An AI-powered productivity companion that analyzes your habits, predicts performance, and helps you become your most productive self.
          </p>
          
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/register" className="landing-btn-primary py-4 px-8 text-lg">
              Start Free
            </Link>
            <button className="landing-btn-ghost py-4 px-8 text-lg group">
              <Play className="w-5 h-5 text-[#A6ADC8] group-hover:text-white transition-colors" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="relative perspective-[2000px]"
        >
          <div className="landing-glass p-4 rounded-3xl landing-float shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group">
            
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>

            {/* Mockup UI Inner */}
            <div className="bg-[#0B1020] rounded-2xl p-6 border border-white/5 relative z-10">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#5B8CFF] to-[#8A5DFF]"></div>
                  <div>
                    <div className="w-24 h-3 bg-white/20 rounded-full mb-2"></div>
                    <div className="w-16 h-2 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                  Optimal State
                </div>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-2 gap-4">
                {/* Score */}
                <div className="col-span-2 md:col-span-1 landing-glass p-4 rounded-xl">
                  <div className="text-white/50 text-xs mb-2">Productivity Score</div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">92</span>
                    <span className="text-green-400 text-sm mb-1">+4% ↑</span>
                  </div>
                </div>

                {/* Focus Hours */}
                <div className="col-span-2 md:col-span-1 landing-glass p-4 rounded-xl">
                  <div className="text-white/50 text-xs mb-2">Focus Hours</div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">6.5</span>
                    <span className="text-white/50 text-sm mb-1">hrs</span>
                  </div>
                </div>

                {/* Graph Mockup */}
                <div className="col-span-2 landing-glass p-4 rounded-xl h-32 relative flex items-end justify-between px-6 pt-8 pb-2">
                   {[40, 60, 45, 80, 65, 95, 75].map((height, i) => (
                      <div key={i} className="w-3 rounded-t-full bg-gradient-to-t from-[#5B8CFF] to-[#8A5DFF] opacity-80" style={{ height: `${height}%` }}></div>
                   ))}
                </div>

                {/* AI Suggestion */}
                <div className="col-span-2 bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 p-4 rounded-xl flex items-start gap-3">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-[#5B8CFF] animate-pulse"></div>
                  <div>
                    <div className="text-[#5B8CFF] text-sm font-semibold mb-1">AI Suggestion</div>
                    <div className="text-white/70 text-xs leading-relaxed">Take a 15-minute break now to maintain your current focus trajectory for the next 2 hours.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
