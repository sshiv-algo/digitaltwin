import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip,
} from 'recharts';
import { FadeIn, GlassCard, SectionLabel, SectionTitle } from './shared';

const lineData = [
  { day: 'Mon', score: 62 }, { day: 'Tue', score: 68 }, { day: 'Wed', score: 65 },
  { day: 'Thu', score: 74 }, { day: 'Fri', score: 78 }, { day: 'Sat', score: 72 },
  { day: 'Sun', score: 84 },
];

const barData = [
  { name: 'Sleep', hours: 7.2 }, { name: 'Study', hours: 4.5 },
  { name: 'Screen', hours: 3.1 }, { name: 'Break', hours: 1.8 },
];

const heatmapData = Array.from({ length: 28 }, (_, i) => ({
  day: i + 1,
  intensity: Math.floor(Math.random() * 5) + 1,
}));

const heatColors = [
  'rgba(91,140,255,0.1)', 'rgba(91,140,255,0.25)', 'rgba(91,140,255,0.45)',
  'rgba(138,93,255,0.6)', 'rgba(138,93,255,0.85)',
];

function Counter({ value, suffix = '', label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="text-3xl md:text-4xl font-bold landing-gradient-text"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {isInView ? value : '0'}{suffix}
      </motion.p>
      <p className="text-[#A6ADC8] text-xs mt-1">{label}</p>
    </div>
  );
}

const chartTooltipStyle = {
  background: 'rgba(11,16,32,0.95)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  color: '#A6ADC8',
  fontSize: '12px',
};

export default function AnalyticsSection() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <SectionLabel>Analytics</SectionLabel>
          <SectionTitle>
            Data that drives{' '}
            <span className="landing-gradient-text">decisions.</span>
          </SectionTitle>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Counter value="84" suffix="%" label="Avg. Productivity" />
          <Counter value="12" suffix=" day" label="Current Streak" />
          <Counter value="3.2" suffix="x" label="Focus Improvement" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <FadeIn delay={0.1} className="lg:col-span-2">
            <GlassCard className="p-6" hover={false}>
              <p className="text-sm font-medium text-white mb-4">Weekly Score Trend</p>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={lineData}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#A6ADC8', fontSize: 11 }} />
                  <YAxis hide domain={[50, 100]} />
                  <Tooltip contentStyle={chartTooltipStyle} />
                  <Line
                    type="monotone" dataKey="score" stroke="url(#lineGrad)" strokeWidth={2.5}
                    dot={{ fill: '#5B8CFF', r: 4, strokeWidth: 0 }}
                    activeDot={{ r: 6, fill: '#8A5DFF' }}
                  />
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#5B8CFF" />
                      <stop offset="100%" stopColor="#8A5DFF" />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <GlassCard className="p-6 flex flex-col items-center justify-center" hover={false}>
              <p className="text-sm font-medium text-white mb-4 self-start">Productivity Score</p>
              <div className="relative w-36 h-36">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 144 144">
                  <circle cx="72" cy="72" r="60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
                  <circle
                    cx="72" cy="72" r="60" fill="none" stroke="url(#circleGrad)" strokeWidth="10"
                    strokeDasharray={`${84 * 3.77} 377`} strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#5B8CFF" />
                      <stop offset="100%" stopColor="#8A5DFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold landing-gradient-text">84</span>
                  <span className="text-[10px] text-[#A6ADC8]">/ 100</span>
                </div>
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.3}>
            <GlassCard className="p-6" hover={false}>
              <p className="text-sm font-medium text-white mb-4">Daily Breakdown</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData} barSize={32}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#A6ADC8', fontSize: 11 }} />
                  <YAxis hide />
                  <Tooltip contentStyle={chartTooltipStyle} />
                  <Bar dataKey="hours" fill="url(#barGrad)" radius={[6, 6, 0, 0]} />
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8A5DFF" />
                      <stop offset="100%" stopColor="#5B8CFF" stopOpacity={0.4} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.4} className="lg:col-span-2">
            <GlassCard className="p-6" hover={false}>
              <p className="text-sm font-medium text-white mb-4">Activity Heatmap</p>
              <div className="grid grid-cols-7 gap-1.5">
                {heatmapData.map((cell) => (
                  <motion.div
                    key={cell.day}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: cell.day * 0.02 }}
                    className="aspect-square rounded-md"
                    style={{ background: heatColors[cell.intensity - 1] }}
                    title={`Day ${cell.day}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4 justify-end">
                <span className="text-[10px] text-[#A6ADC8]">Less</span>
                {heatColors.map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
                ))}
                <span className="text-[10px] text-[#A6ADC8]">More</span>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
