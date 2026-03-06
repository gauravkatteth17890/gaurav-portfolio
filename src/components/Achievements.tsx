import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Trophy, Zap, Clock, ShieldCheck } from 'lucide-react';

const iconMap: Record<string, any> = {
  Trophy,
  Zap,
  Clock,
  ShieldCheck
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">Milestones</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">Key Achievements</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resumeData.achievements.map((achievement, i) => {
          const Icon = iconMap[achievement.icon] || Trophy;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{achievement.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">
                  {achievement.context}
                </p>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
