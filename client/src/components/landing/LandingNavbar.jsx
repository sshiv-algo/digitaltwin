import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GradientButton } from './shared';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'AI Assistant', href: '#ai-assistant' },
  { label: 'Dashboard', href: '#dashboard-preview' },
  { label: 'Pricing', href: '#pricing', badge: 'Coming Soon' },
];

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#060814]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF] to-[#8A5DFF] rounded-xl blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#5B8CFF] to-[#8A5DFF] rounded-xl font-bold text-white text-sm">
                DT
              </div>
            </div>
            <span className="font-semibold text-white hidden sm:block">Digital Twin</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="landing-nav-link flex items-center gap-2">
                {link.label}
                {link.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[#A6ADC8] font-medium">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="landing-btn-ghost text-sm px-5 py-2.5">
              Login
            </Link>
            <Link to="/register">
              <GradientButton className="text-sm px-5 py-2.5">Get Started</GradientButton>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#A6ADC8] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-[#0B1020]/95 backdrop-blur-xl border-t border-white/[0.06]"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block landing-nav-link py-2"
              >
                {link.label}
                {link.badge && (
                  <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-white/10">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.06]">
              <Link to="/login" className="landing-btn-ghost text-center text-sm">
                Login
              </Link>
              <Link to="/register">
                <GradientButton className="w-full text-sm">Get Started</GradientButton>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
