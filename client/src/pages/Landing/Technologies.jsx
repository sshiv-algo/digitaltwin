import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'FastAPI', icon: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg' },
  { name: 'MongoDB', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
  { name: 'Gemini AI', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
  { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
  { name: 'Render', icon: 'https://intellyx.com/wp-content/uploads/2019/08/Render-cloud-logo.png' }
];

const Technologies = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#A6ADC8]/60">Powered by cutting-edge technology</p>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060814] to-transparent z-10"></div>
        
        {/* Marquee Content */}
        <div className="animate-[landing-marquee_30s_linear_infinite] flex items-center whitespace-nowrap">
          {/* Duplicate the array twice for seamless looping */}
          {[...techStack, ...techStack].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3 mx-12 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300">
              <img src={tech.icon} alt={tech.name} className="h-8 object-contain" />
              <span className="text-white font-medium text-lg">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060814] to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Technologies;
