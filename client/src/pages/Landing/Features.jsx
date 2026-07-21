import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Sparkles, PieChart, Target, UserCheck } from 'lucide-react';

const featuresData = [
  {
    title: 'AI Productivity Analysis',
    description: 'Deep-learning algorithms analyze your work patterns to find hidden inefficiencies and prime focus windows.',
    icon: Activity,
    delay: 0.1
  },
  {
    title: 'Digital Twin Simulation',
    description: 'Create a predictive model of your habits. See what happens if you tweak your sleep, focus, or exercise.',
    icon: Cpu,
    delay: 0.2
  },
  {
    title: 'Gemini AI Assistant',
    description: 'Chat with your personalized AI coach that knows your context and provides actionable, real-time advice.',
    icon: Sparkles,
    delay: 0.3
  },
  {
    title: 'Productivity Reports',
    description: 'Beautiful, auto-generated weekly and monthly reports that visualize your growth and burnout risks.',
    icon: PieChart,
    delay: 0.4
  },
  {
    title: 'Habit Tracking',
    description: 'Log daily habits seamlessly. The AI correlates these habits directly to your productivity score.',
    icon: Target,
    delay: 0.5
  },
  {
    title: 'Student & Pro Modes',
    description: 'Tailored interfaces and metrics depending on whether you are studying for exams or managing a startup.',
    icon: UserCheck,
    delay: 0.6
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="landing-label"
          >
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="landing-section-title mb-6"
          >
            Everything you need to <br/>
            <span className="landing-gradient-text">operate at 100%.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              className="landing-glass p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="landing-glow-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-[#5B8CFF]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-[#A6ADC8] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
