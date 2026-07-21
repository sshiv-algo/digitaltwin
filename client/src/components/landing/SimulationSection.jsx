import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Moon, Smartphone, BookOpen, Smile } from 'lucide-react';
import { FadeIn, GlassCard, SectionLabel, SectionTitle, SectionSubtitle } from './shared';

const sliders = [
  { key: 'sleep', label: 'Sleep Hours', icon: Moon, min: 4, max: 10, step: 0.5, default: 6.5, unit: 'h' },
  { key: 'screen', label: 'Screen Time', icon: Smartphone, min: 0, max: 8, step: 0.5, default: 4, unit: 'h' },
  { key: 'study', label: 'Study Hours', icon: BookOpen, min: 0, max: 10, step: 0.5, default: 3, unit: 'h' },
  { key: 'mood', label: 'Mood Level', icon: Smile, min: 1, max: 5, step: 1, default: 3, unit: '/5' },
];

function computeScore(values) {
  const sleepScore = Math.min(values.sleep / 8, 1) * 30;
  const screenScore = Math.max(0, (6 - values.screen) / 6) * 25;
  const studyScore = Math.min(values.study / 6, 1) * 25;
  const moodScore = (values.mood / 5) * 20;
  return Math.round(sleepScore + screenScore + studyScore + moodScore);
}

export default function SimulationSection() {
  const [values, setValues] = useState(
    Object.fromEntries(sliders.map((s) => [s.key, s.default]))
  );

  const score = useMemo(() => computeScore(values), [values]);
  const baseScore = useMemo(() => computeScore(Object.fromEntries(sliders.map((s) => [s.key, s.default]))), []);
  const delta = score - baseScore;

  const handleChange = (key, val) => {
    setValues((prev) => ({ ...prev, [key]: parseFloat(val) }));
  };

  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#5B8CFF]/10 to-[#8A5DFF]/10 blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <SectionLabel>Simulation</SectionLabel>
          <SectionTitle className="mb-6">
            What happens if you{' '}
            <span className="landing-gradient-text">sleep one extra hour?</span>
          </SectionTitle>
          <SectionSubtitle className="mx-auto">
            Adjust the sliders and watch your productivity score update in real time.
            No guesswork — just data-driven predictions.
          </SectionSubtitle>
        </FadeIn>

        <FadeIn delay={0.2}>
          <GlassCard className="p-8 md:p-10" hover={false}>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                {sliders.map((slider) => (
                  <div key={slider.key}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <slider.icon className="w-4 h-4 text-[#5B8CFF]" />
                        <span className="text-sm font-medium text-white">{slider.label}</span>
                      </div>
                      <span className="text-sm font-semibold landing-gradient-text">
                        {values[slider.key]}{slider.unit}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={slider.min}
                      max={slider.max}
                      step={slider.step}
                      value={values[slider.key]}
                      onChange={(e) => handleChange(slider.key, e.target.value)}
                      className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-white/10 accent-[#5B8CFF]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="text-[#A6ADC8] text-sm mb-2">Predicted Score</p>
                <motion.div
                  key={score}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-7xl font-bold landing-gradient-text mb-2"
                >
                  {score}
                </motion.div>

                <motion.div
                  key={delta}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm font-medium px-4 py-1.5 rounded-full ${
                    delta > 0
                      ? 'bg-green-500/10 text-green-400'
                      : delta < 0
                      ? 'bg-red-500/10 text-red-400'
                      : 'bg-white/5 text-[#A6ADC8]'
                  }`}
                >
                  {delta > 0 ? '+' : ''}{delta} from baseline
                </motion.div>

                <div className="mt-8 w-full">
                  <div className="flex items-end gap-2 h-24">
                    {[baseScore, score].map((s, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          animate={{ height: `${s * 0.9}px` }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          className="w-full rounded-t-lg bg-gradient-to-t from-[#5B8CFF]/40 to-[#8A5DFF]/80"
                          style={{ minHeight: 4 }}
                        />
                        <span className="text-[10px] text-[#A6ADC8]">
                          {i === 0 ? 'Current' : 'Simulated'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
