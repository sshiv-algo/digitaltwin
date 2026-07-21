import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#060814] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5B8CFF] to-[#8A5DFF] flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-wider">DT</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Digital Twin</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-[#A6ADC8]">
            <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4 text-[#A6ADC8]">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-[#A6ADC8]/60 text-sm border-t border-white/5 pt-8">
          Made with ❤️ using React, FastAPI, Node.js and Gemini AI.<br/>
          © {new Date().getFullYear()} Digital Twin Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
