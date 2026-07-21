import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Simulation = () => {
  const [sleep, setSleep] = useState(6);
  const [focus, setFocus] = useState(4);

  // Calculate fake predicted score based on inputs
  const predictedScore = Math.min(100, Math.floor((sleep * 8) + (focus * 5) + 12));
  const increase = predictedScore - 68; // Base score

  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="landing-glass p-10 md:p-16 relative overflow-hidden"
        >
          {/* Background Gradient responding to score */}
          <div 
            className="absolute inset-0 opacity-20 transition-all duration-500"
            style={{
              background: `radial-gradient(circle at 50% 100%, ${predictedScore > 85 ? '#22C55E' : '#5B8CFF'} 0%, transparent 70%)`
            }}
          ></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              "What happens if I sleep one extra hour?"
            </h2>
            <p className="text-[#A6ADC8] mb-12 max-w-2xl mx-auto text-lg">
              Stop guessing. Use the Digital Twin simulation engine to predict how lifestyle changes will impact your performance tomorrow.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              
              {/* Sliders */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-white mb-3 font-medium">
                    <span>Sleep Duration</span>
                    <span className="text-[#5B8CFF]">{sleep} hrs</span>
                  </div>
                  <input 
                    type="range" 
                    min="4" max="10" step="0.5"
                    value={sleep}
                    onChange={(e) => setSleep(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#5B8CFF]"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between text-white mb-3 font-medium">
                    <span>Deep Focus Target</span>
                    <span className="text-[#8A5DFF]">{focus} hrs</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" max="8" step="0.5"
                    value={focus}
                    onChange={(e) => setFocus(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8A5DFF]"
                  />
                </div>
              </div>

              {/* Result Card */}
              <div className="landing-glass p-8 border border-white/10 text-center relative">
                <div className="text-[#A6ADC8] text-sm uppercase tracking-widest font-semibold mb-4">Predicted Score</div>
                
                <div className="flex justify-center items-end gap-3 mb-4">
                  <motion.span 
                    key={predictedScore}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl font-bold text-white"
                  >
                    {predictedScore}
                  </motion.span>
                </div>
                
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${increase >= 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {increase >= 0 ? '↑' : '↓'} {Math.abs(increase)}% vs Today
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Simulation;
