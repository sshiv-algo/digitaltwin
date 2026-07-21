import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#060814]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B8CFF] to-[#8A5DFF] flex items-center justify-center shadow-[0_0_15px_rgba(91,140,255,0.5)] group-hover:shadow-[0_0_25px_rgba(138,93,255,0.7)] transition-all">
            <span className="text-white font-bold text-lg tracking-wider">DT</span>
          </div>
          <span className="text-white font-semibold text-xl tracking-tight hidden sm:block">Digital Twin</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="landing-nav-link">Features</a>
          <a href="#how-it-works" className="landing-nav-link">How it Works</a>
          <a href="#ai" className="landing-nav-link">AI Assistant</a>
          <Link to="/dashboard" className="landing-nav-link">Dashboard</Link>
          <span className="text-[#A6ADC8]/50 text-sm font-medium cursor-not-allowed">Pricing (Coming Soon)</span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="landing-btn-ghost hidden sm:inline-flex text-sm py-2 px-5">
            Login
          </Link>
          <Link to="/register" className="landing-btn-primary text-sm py-2 px-5">
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
