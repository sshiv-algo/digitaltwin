import { FadeIn } from './shared';

const technologies = [
  { name: 'React', icon: '⚛' },
  { name: 'Node.js', icon: '⬢' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Gemini AI', icon: '✦' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Render', icon: '◈' },
];

function TechLogo({ name, icon }) {
  return (
    <div className="flex items-center gap-3 px-8 py-4 shrink-0">
      <span className="text-2xl opacity-60">{icon}</span>
      <span className="text-[#A6ADC8] font-medium text-sm tracking-wide whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TrustedTech() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="py-16 border-y border-white/[0.04] overflow-hidden">
      <FadeIn className="text-center mb-10 px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#A6ADC8]/60 font-medium">
          Built with industry-leading technologies
        </p>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060814] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060814] to-transparent z-10" />

        <div className="flex landing-marquee">
          {doubled.map((tech, i) => (
            <TechLogo key={`${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
