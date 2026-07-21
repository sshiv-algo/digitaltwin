import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, TrendingUp, Brain, Moon, Focus, Smile, Sparkles } from 'lucide-react';
import { GradientButton } from './shared';

const weeklyData = [62, 71, 68, 78, 82, 75, 84];

function HeroDashboard() {
  return (
    <div className="landing-glass p-6 w-full max-w-md shadow-2xl shadow-[#5B8CFF]/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[#A6ADC8] text-xs font-medium uppercase tracking-wider">Productivity Score</p>
          <p className="text-4xl font-bold landing-gradient-text mt-1">84</p>
        </div>
        <div className="w-16 h-16 rounded-full border-4 border-[#5B8CFF]/30 flex items-center justify-center relative">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(91,140,255,0.15)" strokeWidth="4" />
            <circle
              cx="32" cy="32" r="28" fill="none"
              stroke="url(#scoreGrad)" strokeWidth="4"
              strokeDasharray={`${84 * 1.76} 176`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5B8CFF" />
                <stop offset="100%" stopColor="#8A5DFF" />
              </linearGradient>
            </defs>
          </svg>
          <TrendingUp className="w-5 h-5 text-[#5B8CFF]" />
        </div>
      </div>

      <div className="mb-6">
        <p className="text-[#A6ADC8] text-xs font-medium mb-3">Weekly Performance</p>
        <div className="flex items-end gap-1.5 h-16">
          {weeklyData.map((val, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${val}%` }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-[#5B8CFF]/40 to-[#8A5DFF]/80 min-h-[4px]"
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d) => (
            <span key={d} className="text-[10px] text-[#A6ADC8]/60 flex-1 text-center">{d}</span>
          ))}
        </div>
      </div>

      <div className="landing-glass p-3 mb-4 flex items-start gap-3 border border-[#5B8CFF]/20">
        <Sparkles className="w-4 h-4 text-[#8A5DFF] shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-medium text-white">AI Suggestion</p>
          <p className="text-[11px] text-[#A6ADC8] mt-0.5 leading-relaxed">
            Reduce screen time by 30 min to boost tomorrow&apos;s score by 6%.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Moon, label: 'Sleep', value: '7.2h', color: '#5B8CFF' },
          { icon: Focus, label: 'Focus', value: '4.5h', color: '#8A5DFF' },
          { icon: Smile, label: 'Mood', value: '4/5', color: '#5B8CFF' },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="landing-glass p-3 text-center">
            <Icon className="w-4 h-4 mx-auto mb-1 text-[#A6ADC8]" />
            <p className="text-[10px] text-[#A6ADC8]">{label}</p>
            <p className="text-sm font-semibold text-white mt-0.5">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="landing-particle"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 landing-grid-bg opacity-40" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#5B8CFF]/20 blur-[120px] landing-blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#8A5DFF]/20 blur-[120px] landing-blob-delay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#5B8CFF]/10 to-[#8A5DFF]/10 blur-[100px] landing-pulse-glow" />

      <Particles />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <Brain className="w-4 h-4 text-[#5B8CFF]" />
                <span className="text-sm text-[#A6ADC8]">Powered by Gemini AI</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                Meet Your{' '}
                <span className="landing-gradient-text">Digital Twin.</span>
              </h1>

              <p className="text-lg md:text-xl text-[#A6ADC8] leading-relaxed max-w-xl mb-10">
                An AI-powered productivity companion that analyzes your habits, predicts performance,
                and helps you become your most productive self.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <GradientButton className="text-base px-8 py-3.5">Start Free</GradientButton>
                </Link>
                <button className="landing-btn-ghost text-base px-8 py-3.5 group">
                  <Play className="w-4 h-4 group-hover:text-[#5B8CFF] transition-colors" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF]/30 to-[#8A5DFF]/30 blur-[60px] rounded-3xl scale-90 landing-pulse-glow" />
            <motion.div
              className="relative landing-float"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroDashboard />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
