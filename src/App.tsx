import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Splash } from './components/Splash';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { resumeData } from './data/resume';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatedBackground />
          <Navbar />

          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[60] origin-left"
            style={{ scaleX }}
          />

          <main>
            <Hero />
            <Achievements />
            <Experience />
            <Skills />
            <Education />
          </main>

          {/* Footer */}
          <footer className="py-24 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-8 tracking-tighter">
                  Let's connect<span className="text-white/40">.</span>
                </h2>
                <div className="space-y-4">
                  <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" /> {resumeData.basics.email}
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <Phone className="w-5 h-5" /> {resumeData.basics.phone}
                  </div>
                  <div className="flex items-center gap-4 text-white/60">
                    <MapPin className="w-5 h-5" /> {resumeData.basics.location}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-end md:items-end">
                <p className="text-sm text-white/20 mb-4 uppercase tracking-widest">
                  © {new Date().getFullYear()} {resumeData.basics.name}
                </p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
                >
                  Back to top
                </button>
              </div>
            </div>
          </footer>

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
