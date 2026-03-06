import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data/resume';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="text-6xl font-bold tracking-tighter text-white">
          {resumeData.basics.initials}
        </div>
        <motion.div
          className="absolute -inset-4 border border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/40"
      >
        Initializing Portfolio
      </motion.div>
    </motion.div>
  );
};
