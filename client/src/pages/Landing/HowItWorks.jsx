import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Cpu, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Track',
    desc: 'Connect your tools and log daily habits. DT silently gathers the context of your day.',
    icon: Database
  },
  {
    number: '2',
    title: 'Analyze',
    desc: 'Our AI processes thousands of data points to find correlations between your actions and outcomes.',
    icon: Search
  },
  {
    number: '3',
    title: 'Predict',
    desc: 'The Digital Twin engine simulates tomorrow, predicting burnout risks and optimal focus times.',
    icon: Cpu
  },
  {
    number: '4',
    title: 'Improve',
    desc: 'Receive real-time, actionable coaching from Gemini AI to continuously elevate your baseline.',
    icon: TrendingUp
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative border-y border-white/5 bg-[#0B1020]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="landing-section-title">The Methodology</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5B8CFF]/30 to-transparent -translate-y-1/2 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="landing-glass p-8 relative z-10 text-center hover:border-[#5B8CFF]/30 transition-colors"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#1E293B] border border-white/10 flex items-center justify-center text-[#5B8CFF] font-bold shadow-lg">
                {step.number}
              </div>

              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#5B8CFF]/10 to-[#8A5DFF]/10 border border-white/5 flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-[#A6ADC8] text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
