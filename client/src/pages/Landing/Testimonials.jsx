import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Digital Twin completely changed how I manage my startup. I finally know when to push hard and when to step back before I burn out.",
    author: "Sarah J.",
    role: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    quote: "The Gemini AI integration is scary good. It suggested I cut my afternoon meetings and my focus score jumped 20% in a week.",
    author: "David L.",
    role: "Senior Engineer",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "As a med student, I have to optimize every hour. This app feels like having a personal performance coach in my pocket.",
    author: "Emily R.",
    role: "Medical Student",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Subtle background blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8A5DFF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="landing-section-title mb-16">
          Loved by top performers.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="landing-glass p-8 text-left flex flex-col justify-between"
            >
              <div className="mb-8">
                <svg className="w-8 h-8 text-[#5B8CFF]/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#E2E8F0] leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border border-white/20" />
                <div>
                  <div className="text-white font-medium">{t.author}</div>
                  <div className="text-[#A6ADC8] text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
