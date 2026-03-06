import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">Arsenal</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">Core Competencies</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(resumeData.skills).map(([category, skills], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            <h4 className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6 font-bold">
              {category}
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white/70 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
