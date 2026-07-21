import { FadeIn, GlassCard, SectionLabel, SectionTitle } from './shared';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Computer Science Student',
    avatar: 'PS',
    quote: 'Digital Twin helped me identify that my late-night screen time was destroying my morning focus. My productivity score jumped 23% in two weeks.',
    color: '#5B8CFF',
  },
  {
    name: 'Marcus Chen',
    role: 'Software Engineer',
    avatar: 'MC',
    quote: 'The what-if simulation is a game changer. I can test habit changes before committing — it feels like having a crystal ball for productivity.',
    color: '#8A5DFF',
  },
  {
    name: 'Sarah Okonkwo',
    role: 'MBA Student',
    avatar: 'SO',
    quote: 'The Gemini AI assistant feels genuinely personal. It remembered my exam schedule and adjusted its advice accordingly. Incredible.',
    color: '#5B8CFF',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-20">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionTitle>
            Loved by{' '}
            <span className="landing-gradient-text">students & professionals.</span>
          </SectionTitle>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <GlassCard className="p-8 h-full flex flex-col">
                <p className="text-[#A6ADC8] leading-relaxed text-sm flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-[#A6ADC8]">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
