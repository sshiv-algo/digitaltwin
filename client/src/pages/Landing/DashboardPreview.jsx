import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { TrendingUp, Zap, Clock, ShieldAlert } from 'lucide-react';

const mockData = [
  { val: 40 }, { val: 45 }, { val: 42 }, { val: 60 }, 
  { val: 75 }, { val: 85 }, { val: 92 }, { val: 88 }
];

const DashboardPreview = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#060814]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5B8CFF]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text & Features */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="landing-label">Command Center</div>
          <h2 className="landing-section-title mb-6">
            Your personal <br/>
            <span className="landing-gradient-text">mission control.</span>
          </h2>
          <p className="landing-section-subtitle mb-10">
            A beautifully crafted dashboard that translates complex data into actionable insights. Instantly see where you stand and what you need to do next.
          </p>

          <div className="space-y-6">
            {[
              { icon: TrendingUp, title: 'Productivity Score', desc: 'A real-time metric combining your focus, sleep, and tasks.' },
              { icon: Zap, title: 'Personalized Insights', desc: 'AI-generated recommendations based on your unique patterns.' },
              { icon: ShieldAlert, title: 'Burnout Prediction', desc: 'Get alerted before you hit a wall, so you can rest effectively.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="mt-1 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#8A5DFF]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-[#A6ADC8]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: MacBook Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative perspective-[1500px]"
        >
          <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg] shadow-[20px_30px_60px_rgba(0,0,0,0.8)] rounded-[2rem] p-3 bg-gradient-to-b from-[#2A2D3E] to-[#12141D] border border-white/10 landing-float">
            
            {/* Screen */}
            <div className="bg-[#020617] rounded-[1.5rem] overflow-hidden border border-black relative">
              {/* Header */}
              <div className="h-12 border-b border-white/10 flex items-center px-6 gap-4 bg-[#0F172A]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-6 w-64 bg-[#1E293B] rounded-md mx-auto"></div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 grid grid-cols-3 gap-4 bg-[#020617] h-[400px]">
                {/* Sidebar */}
                <div className="col-span-1 space-y-4">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-[#5B8CFF]/20 to-[#8A5DFF]/20 border border-[#5B8CFF]/30 p-4 flex flex-col justify-between">
                    <span className="text-white/70 text-xs">Current Score</span>
                    <span className="text-3xl font-bold text-white">92</span>
                  </div>
                  <div className="h-48 rounded-xl bg-white/5 border border-white/10 p-4">
                     <div className="h-4 w-20 bg-white/10 rounded mb-4"></div>
                     <div className="space-y-3">
                       <div className="h-8 bg-white/5 rounded"></div>
                       <div className="h-8 bg-white/5 rounded"></div>
                       <div className="h-8 bg-white/5 rounded"></div>
                     </div>
                  </div>
                </div>

                {/* Main Area */}
                <div className="col-span-2 space-y-4">
                  {/* Chart Area */}
                  <div className="h-40 rounded-xl bg-white/5 border border-white/10 p-4 relative">
                    <div className="absolute top-4 left-4 h-4 w-32 bg-white/10 rounded"></div>
                    <div className="h-full w-full pt-8 pb-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={mockData}>
                          <Line type="monotone" dataKey="val" stroke="#8A5DFF" strokeWidth={3} dot={{r: 4, fill: '#8A5DFF'}} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  {/* Bottom Cards */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className="h-28 rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-center">
                       <Clock className="w-8 h-8 text-[#5B8CFF] opacity-50" />
                     </div>
                     <div className="h-28 rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-center">
                       <Zap className="w-8 h-8 text-[#8A5DFF] opacity-50" />
                     </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Base/Keyboard hint */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-6 bg-[#1A1C29] rounded-b-[2rem] rounded-t-sm shadow-2xl">
              <div className="w-24 h-1 bg-white/10 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DashboardPreview;
