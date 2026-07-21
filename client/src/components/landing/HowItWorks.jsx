import { ClipboardList, BarChart2, TrendingUp, Rocket, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, GlassCard, SectionLabel, SectionTitle } from './shared';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Track',
    description: 'Log your daily habits — sleep, focus hours, screen time, and mood — in seconds.',
  },
  {
    icon: BarChart2,
    number: '02',
    title: 'Analyze',
    description: 'AI processes your data to reveal patterns, trends, and hidden productivity drivers.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Predict',
    description: 'Run simulations to see how habit changes will impact your score before you commit.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Improve',
    description: 'Follow personalized AI recommendations and watch your productivity score climb.',
  },
];

function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center py-2">
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="w-6 h-6 text-[#5B8CFF]/60" />
      </motion.div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 lg:px-8 bg-[#0B1020]/50">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-20">
          <SectionLabel>How It Works</SectionLabel>
          <SectionTitle>
            Four steps to your{' '}
            <span className="landing-gradient-text">best self.</span>
          </SectionTitle>
        </FadeIn>

        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="contents">
              <FadeIn delay={i * 0.15}>
                <GlassCard className="p-6 text-center h-full relative group">
                  <div className="absolute top-4 right-4 text-[10px] font-bold text-[#5B8CFF]/30">
                    {step.number}
                  </div>
                  <div className="landing-glow-icon w-14 h-14 mx-auto mb-5 group-hover:shadow-[0_0_40px_rgba(91,140,255,0.35)] transition-shadow">
                    <step.icon className="w-6 h-6 text-[#5B8CFF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-[#A6ADC8] text-sm leading-relaxed">{step.description}</p>
                </GlassCard>
              </FadeIn>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <motion.div
                    className="w-8 h-px bg-gradient-to-r from-[#5B8CFF]/40 to-[#8A5DFF]/40"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden mt-6">
          <Arrow />
        </div>
      </div>
    </section>
  );
}
