import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

const conversation = [
  { role: 'user', text: "I'm feeling incredibly distracted today. Can't focus." },
  { role: 'ai', text: "I noticed your sleep quality dropped by 15% last night. Based on your habits, taking a 20-minute nap now and switching to low-cognitive tasks for the next hour will optimize your remaining energy." },
];

const AIAssistantPreview = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('ai-preview');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6) {
          setVisibleMessages(1);
          setTimeout(() => setVisibleMessages(2), 1500);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="ai-preview" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Chat Interface Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 landing-glass p-4 rounded-3xl border border-white/10 shadow-2xl bg-[#0B1020]/80"
        >
          <div className="bg-[#020617] rounded-2xl h-[450px] border border-white/5 flex flex-col relative overflow-hidden">
            
            {/* Chat Header */}
            <div className="p-4 border-b border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#5B8CFF] to-[#8A5DFF] p-[1px]">
                <div className="w-full h-full bg-[#020617] rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#8A5DFF]" />
                </div>
              </div>
              <div>
                <div className="text-white font-medium">Gemini Coach</div>
                <div className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span> Online
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 space-y-6 overflow-hidden flex flex-col justify-end">
              {visibleMessages > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex gap-3 justify-end"
                >
                  <div className="bg-[#1E293B] text-white p-4 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                    {conversation[0].text}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              )}

              {visibleMessages === 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#5B8CFF] to-[#8A5DFF] flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-white p-4 rounded-2xl rounded-tl-sm w-[60px] flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-bounce delay-200"></span>
                  </div>
                </motion.div>
              )}

              {visibleMessages > 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#5B8CFF] to-[#8A5DFF] flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-[#5B8CFF]/10 to-[#8A5DFF]/10 border border-[#8A5DFF]/20 text-white p-4 rounded-2xl rounded-tl-sm max-w-[85%] text-sm leading-relaxed">
                    <p>{conversation[1].text}</p>
                    <div className="mt-3 flex gap-2">
                      <button className="bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-lg text-xs font-medium border border-white/5">Start Break Timer</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Input Area */}
            <div className="p-4 bg-[#0F172A] border-t border-white/5 m-2 rounded-xl flex items-center gap-2">
              <div className="flex-1 h-8 bg-white/5 rounded flex items-center px-3 text-white/30 text-xs">
                Ask Gemini for advice...
              </div>
              <div className="w-8 h-8 rounded bg-[#8A5DFF] flex items-center justify-center cursor-pointer hover:bg-[#794df0]">
                 <span className="text-white text-lg">↑</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="landing-label" id="ai">Powered by Google Gemini</div>
          <h2 className="landing-section-title mb-6">
            A coach that <br/>
            <span className="landing-gradient-text">actually knows you.</span>
          </h2>
          <p className="landing-section-subtitle mb-8">
            Generic advice doesn't work. Your Digital Twin AI assistant analyzes your specific data history—sleep, mood, work hours, and tasks—to give hyper-personalized recommendations when you need them most.
          </p>
          
          <ul className="space-y-4">
            {['Context-aware interventions', 'Predictive burnout warnings', 'Customized focus strategies'].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">✓</div>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default AIAssistantPreview;
