import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const barData = [
  { day: 'Mon', score: 65 },
  { day: 'Tue', score: 72 },
  { day: 'Wed', score: 85 },
  { day: 'Thu', score: 82 },
  { day: 'Fri', score: 95 },
  { day: 'Sat', score: 60 },
  { day: 'Sun', score: 55 },
];

const AnalyticsPreview = () => {
  return (
    <section className="py-32 relative bg-[#060814]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="landing-label">Deep Analytics</div>
          <h2 className="landing-section-title mb-6">
            Visualize your <br/>
            <span className="landing-gradient-text">growth trajectory.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Chart Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 landing-glass p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8A5DFF]/10 blur-[100px] rounded-full"></div>
            
            <h3 className="text-white font-semibold text-xl mb-1">Weekly Performance</h3>
            <p className="text-[#A6ADC8] text-sm mb-8">Your productivity score trend over the last 7 days.</p>
            
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#A6ADC8', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#A6ADC8', fontSize: 12 }} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }} 
                    contentStyle={{ backgroundColor: '#1E293B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="score" radius={[6, 6, 6, 6]}>
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.score > 80 ? 'url(#colorScoreHigh)' : 'url(#colorScoreMid)'} />
                    ))}
                  </Bar>
                  <defs>
                    <linearGradient id="colorScoreHigh" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8A5DFF" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#5B8CFF" stopOpacity={1}/>
                    </linearGradient>
                    <linearGradient id="colorScoreMid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5B8CFF" stopOpacity={0.6}/>
                      <stop offset="100%" stopColor="#5B8CFF" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="landing-glass p-8 h-[calc(50%-12px)] flex flex-col justify-center"
            >
              <div className="text-[#A6ADC8] text-sm font-medium mb-2">Monthly Average</div>
              <div className="text-5xl font-bold text-white mb-2">84<span className="text-2xl text-white/50">/100</span></div>
              <div className="text-green-400 text-sm font-medium flex items-center gap-1">
                ↑ 12% from last month
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="landing-glass p-8 h-[calc(50%-12px)] flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF]/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="text-[#A6ADC8] text-sm font-medium mb-2">Prime Focus Window</div>
                <div className="text-3xl font-bold text-white mb-1">09:00 - 11:30</div>
                <div className="text-white/70 text-sm">AM, Peak cognitive state</div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AnalyticsPreview;
