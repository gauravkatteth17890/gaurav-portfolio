import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { resumeData } from '../data/resume';
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Experience', id: 'experience' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' }
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {resumeData.basics.initials}<span className="text-white/40">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => scrollTo(item.id)}
              className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              {item.name}
            </motion.button>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href={`mailto:${resumeData.basics.email}`}
            className="px-5 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-b border-white/10"
      >
        <div className="flex flex-col gap-6 p-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-2xl font-bold text-white text-left"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white/40 text-sm">
              <Mail className="w-4 h-4" /> {resumeData.basics.email}
            </div>
            <div className="flex items-center gap-3 text-white/40 text-sm">
              <Phone className="w-4 h-4" /> {resumeData.basics.phone}
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};
