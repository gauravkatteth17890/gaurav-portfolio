import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">Background</h2>
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <GraduationCap className="w-8 h-8" /> Education
            </h3>
          </div>
          
          <div className="space-y-8">
            {resumeData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-white/20" />
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2 block">
                  {edu.date}
                </span>
                <h4 className="text-xl font-bold text-white mb-1">{edu.institution}</h4>
                <p className="text-white/50 text-sm mb-1">{edu.degree}</p>
                <p className="text-white/30 text-xs">{edu.location}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">Credentials</h2>
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-8 h-8" /> Certifications
            </h3>
          </div>

          <div className="space-y-4">
            {resumeData.certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between hover:bg-white/[0.05] transition-all"
              >
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 group-hover:text-white transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-white/40">{cert.issuer}</p>
                </div>
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
                  {cert.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
