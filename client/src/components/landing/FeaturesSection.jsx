import { Brain, Cpu, MessageSquare, BarChart3, Repeat, GraduationCap } from 'lucide-react';
import { FadeIn, GlassCard, GlowIcon, SectionLabel, SectionTitle, SectionSubtitle } from './shared';

const features = [
  {
    icon: Brain,
    title: 'AI Productivity Analysis',
    description: 'Deep learning models analyze your daily patterns to uncover hidden productivity insights and burnout signals.',
  },
  {
    icon: Cpu,
    title: 'Digital Twin Simulation',
    description: 'Run what-if scenarios on your habits before committing. See the future impact of every change instantly.',
  },
  {
    icon: MessageSquare,
    title: 'Gemini AI Assistant',
    description: 'A conversational AI coach powered by Google Gemini that understands your context and gives personalized advice.',
  },
  {
    icon: BarChart3,
    title: 'Productivity Reports',
    description: 'Beautiful weekly and monthly reports with exportable PDFs. Track progress over time with clarity.',
  },
  {
    icon: Repeat,
    title: 'Habit Tracking',
    description: 'Log sleep, focus hours, screen time, and mood. Build streaks and earn badges as you improve.',
  },
  {
    icon: GraduationCap,
    title: 'Student & Professional Modes',
    description: 'Tailored scoring algorithms and AI recommendations optimized for your lifestyle — student or professional.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <SectionLabel>Features</SectionLabel>
          <SectionTitle className="mb-6">
            Everything you need to{' '}
            <span className="landing-gradient-text">level up.</span>
          </SectionTitle>
          <SectionSubtitle className="mx-auto">
            A complete productivity intelligence platform designed to help you understand,
            predict, and optimize your daily performance.
          </SectionSubtitle>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <GlassCard className="p-8 h-full group">
                <GlowIcon className="mb-6 group-hover:shadow-[0_0_40px_rgba(91,140,255,0.4)] transition-shadow duration-500">
                  <feature.icon className="w-6 h-6 text-[#5B8CFF]" />
                </GlowIcon>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-[#A6ADC8] leading-relaxed text-sm">{feature.description}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
