import { TrendingUp, Target, AlertTriangle, Calendar, Sparkles } from 'lucide-react';
import { FadeIn, SectionLabel, SectionTitle } from './shared';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Productivity Score',
    description: 'A real-time 0–100 score calculated from your sleep, focus, screen time, and mood data.',
  },
  {
    icon: Calendar,
    title: 'Weekly Analytics',
    description: 'Visualize trends across the week. Spot patterns that boost or drain your performance.',
  },
  {
    icon: AlertTriangle,
    title: 'Burnout Prediction',
    description: 'AI-powered risk assessment warns you before burnout hits, with actionable recovery steps.',
  },
  {
    icon: Target,
    title: 'Daily Goals',
    description: 'Set micro-goals each morning. Track completion and build momentum with streak rewards.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Insights',
    description: 'Gemini AI generates daily briefings tailored to your habits, role, and current trends.',
  },
];

function MacBookMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF]/25 to-[#8A5DFF]/25 blur-[80px] rounded-3xl scale-95 landing-pulse-glow" />

      <div className="relative landing-glass rounded-t-2xl p-1 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-white/5 text-[10px] text-[#A6ADC8]">
              dtwinai.vercel.app
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#0B1020] min-h-[320px]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] text-[#A6ADC8] uppercase tracking-wider">Dashboard</p>
              <p className="text-lg font-bold text-white">Good morning, Alex</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold landing-gradient-text">78</p>
              <p className="text-[10px] text-[#A6ADC8]">Score</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: 'Sleep', val: '6.5h', warn: true },
              { label: 'Study', val: '4.2h', warn: false },
              { label: 'Mood', val: '3/5', warn: false },
            ].map((s) => (
              <div key={s.label} className="landing-glass p-2 text-center">
                <p className="text-[9px] text-[#A6ADC8]">{s.label}</p>
                <p className={`text-sm font-semibold ${s.warn ? 'text-orange-400' : 'text-white'}`}>{s.val}</p>
              </div>
            ))}
          </div>

          <div className="landing-glass p-3 mb-3">
            <p className="text-[10px] text-[#A6ADC8] mb-2">Weekly Trend</p>
            <div className="flex items-end gap-1 h-12">
              {[55, 62, 58, 71, 68, 75, 78].map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#5B8CFF]/30 to-[#8A5DFF]/70"
                  style={{ height: `${v}%` }}
                />
              ))}
            </div>
          </div>

          <div className="landing-glass p-3 flex items-start gap-2 border border-[#5B8CFF]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#8A5DFF] shrink-0 mt-0.5" />
            <p className="text-[10px] text-[#A6ADC8] leading-relaxed">
              Your sleep dropped 1.2h this week. Prioritizing rest could raise your score by 12%.
            </p>
          </div>
        </div>
      </div>

      <div className="h-3 bg-gradient-to-b from-white/10 to-white/5 rounded-b-xl mx-8" />
      <div className="h-1.5 bg-white/5 rounded-full mx-16 mt-1" />
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section id="dashboard-preview" className="py-32 px-6 lg:px-8 bg-[#0B1020]/50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <SectionLabel>Dashboard</SectionLabel>
          <SectionTitle>
            Your command center for{' '}
            <span className="landing-gradient-text">productivity.</span>
          </SectionTitle>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <MacBookMockup />
          </FadeIn>

          <div className="space-y-6">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} direction="right">
                <div className="flex gap-5 group">
                  <div className="landing-glow-icon shrink-0 w-12 h-12 group-hover:shadow-[0_0_30px_rgba(91,140,255,0.35)] transition-shadow">
                    <item.icon className="w-5 h-5 text-[#5B8CFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-[#A6ADC8] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
