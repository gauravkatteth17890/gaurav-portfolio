import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ArrowDown, FileDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block px-4 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-white/60">
            {resumeData.basics.title}
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-10 leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block"
          >
            {resumeData.basics.name}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          
          <button
            onClick={() => window.print()}
            className="group px-8 py-4 border border-white/20 text-white font-semibold rounded-full backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/40 active:scale-95"
          >
            <span className="flex items-center gap-2">
              Download Resume <FileDown className="w-4 h-4" />
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Top 3 Impact Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="w-full max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-auto pb-12"
      >
        {[
          { label: "SLA Compliance", value: "98%+" },
          { label: "Efficiency Gain", value: "25%" },
          { label: "Experience", value: "7+ Yrs" }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center md:items-start border-l border-white/10 pl-6">
            <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
            <span className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
