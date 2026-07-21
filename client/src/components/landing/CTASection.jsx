import { Link } from 'react-router-dom';
import { Github, ArrowRight } from 'lucide-react';
import { FadeIn, GradientButton } from './shared';

export default function CTASection() {
  return (
    <section id="pricing" className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5B8CFF]/15 via-transparent to-[#8A5DFF]/15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#5B8CFF]/20 to-[#8A5DFF]/20 blur-[100px] rounded-full landing-pulse-glow" />

      <div className="max-w-4xl mx-auto relative text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Start Building Your{' '}
            <span className="landing-gradient-text">Better Self</span>{' '}
            Today.
          </h2>
          <p className="text-lg text-[#A6ADC8] mb-10 max-w-xl mx-auto">
            Join thousands of students and professionals who use Digital Twin to understand,
            optimize, and master their daily productivity.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <GradientButton className="text-base px-8 py-3.5 group">
                Launch App
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </GradientButton>
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-btn-ghost text-base px-8 py-3.5 group"
            >
              <Github className="w-4 h-4" />
              View GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
