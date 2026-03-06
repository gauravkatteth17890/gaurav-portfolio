import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data/resume';
import { ChevronDown, MapPin, Calendar, Briefcase } from 'lucide-react';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">Professional Path</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">Experience</h3>
      </div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "group rounded-3xl border transition-all duration-500 overflow-hidden",
              expandedIndex === i 
                ? "bg-white/[0.05] border-white/20 shadow-2xl shadow-white/5" 
                : "bg-white/[0.02] border-white/10 hover:border-white/20"
            )}
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="w-full p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-4 h-4 text-white/40" />
                  <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                    {exp.company}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                  {exp.role}
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:text-right">
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <Calendar className="w-4 h-4" />
                  {exp.dates}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 text-white/20 transition-transform duration-500",
                  expandedIndex === i && "rotate-180"
                )} />
              </div>
            </button>

            <AnimatePresence>
              {expandedIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                >
                  <div className="px-8 pb-8 pt-2 border-t border-white/5">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {exp.metrics.map((metric, mi) => (
                        <span key={mi} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60">
                          {metric}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bi}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: bi * 0.05 }}
                          className="flex gap-4 text-white/60 leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
