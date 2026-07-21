import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Sparkles } from 'lucide-react';
import { FadeIn, SectionLabel, SectionTitle, SectionSubtitle } from './shared';

const conversation = [
  { role: 'user', text: "I'm feeling distracted today." },
  {
    role: 'ai',
    text: 'Based on your recent habits, reducing screen time by 45 minutes could increase your productivity score by 8%.',
  },
  {
    role: 'ai',
    text: 'Try a 25-minute focus block now — your peak concentration window is typically between 10–11 AM.',
  },
];

function TypingIndicator() {
  return (
    <div className="flex gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-[#5B8CFF]/60"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

export default function AIAssistantSection() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    const el = document.getElementById('ai-assistant');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const showNext = () => {
      if (i >= conversation.length) return;
      const msg = conversation[i];
      if (msg.role === 'ai') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, msg]);
          i++;
          setTimeout(showNext, 1200);
        }, 1500);
      } else {
        setVisibleMessages((prev) => [...prev, msg]);
        i++;
        setTimeout(showNext, 800);
      }
    };
    showNext();
  }, [started]);

  return (
    <section id="ai-assistant" className="py-32 px-6 lg:px-8 bg-[#0B1020]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <SectionLabel>AI Assistant</SectionLabel>
            <SectionTitle className="mb-6">
              Your personal{' '}
              <span className="landing-gradient-text">productivity coach.</span>
            </SectionTitle>
            <SectionSubtitle>
              Powered by Google Gemini, your Digital Twin understands your habits and delivers
              context-aware advice — like having a productivity expert on call 24/7.
            </SectionSubtitle>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Context-aware', 'Real-time advice', 'Habit-based insights'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#A6ADC8]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF]/20 to-[#8A5DFF]/20 blur-[60px] rounded-[40px]" />

              <div className="relative landing-glass rounded-[32px] p-1 shadow-2xl shadow-black/30">
                <div className="bg-[#060814] rounded-[28px] overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B8CFF] to-[#8A5DFF] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Gemini Assistant</p>
                      <p className="text-[10px] text-green-400">Online</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-3 min-h-[280px] max-h-[320px] overflow-y-auto custom-scrollbar">
                    <AnimatePresence>
                      {visibleMessages.map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          {msg.role === 'ai' && (
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B8CFF]/30 to-[#8A5DFF]/30 flex items-center justify-center shrink-0 mt-1">
                              <Bot className="w-3 h-3 text-[#5B8CFF]" />
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                              msg.role === 'user'
                                ? 'bg-gradient-to-r from-[#5B8CFF] to-[#8A5DFF] text-white rounded-br-md'
                                : 'landing-glass text-[#A6ADC8] rounded-bl-md'
                            }`}
                          >
                            {msg.text}
                          </div>
                          {msg.role === 'user' && (
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                              <User className="w-3 h-3 text-[#A6ADC8]" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {isTyping && (
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#5B8CFF]/30 to-[#8A5DFF]/30 flex items-center justify-center shrink-0">
                          <Bot className="w-3 h-3 text-[#5B8CFF]" />
                        </div>
                        <div className="landing-glass rounded-2xl rounded-bl-md">
                          <TypingIndicator />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="px-4 py-3 border-t border-white/[0.06]">
                    <div className="landing-glass px-4 py-2.5 rounded-xl text-sm text-[#A6ADC8]/50">
                      Ask your Digital Twin anything...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
