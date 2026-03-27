import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-scroll';
import { FaDownload, FaBriefcase, FaUserPlus } from 'react-icons/fa';

const MARQUEE_ITEMS = [
  'Full Stack Developer', 'Problem Solver', 'Tech Lead'
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MARQUEE_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="bg-glow top-1/4 -left-1/4 animate-pulse-glow" />
      <div className="bg-glow bottom-1/4 -right-1/4 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating Blobs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-blue-400 font-display font-semibold tracking-widest uppercase mb-4 glow-text">
            Hi, I'm
          </h4>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
            Kaniz <span className="text-gradient glow-text">Fatema</span>
          </h1>
          
          {/* Vertical Marquee Sub-headline */}
          <div className="h-12 md:h-16 overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-medium text-white/80"
              >
                {MARQUEE_ITEMS[currentIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed">
            I craft scalable backend systems and modern frontend applications using MERN stack.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="contact" smooth={true} offset={-70}>
              <button className="btn-primary">
                <FaUserPlus /> Hire Me
              </button>
            </Link>
            <Link to="projects" smooth={true} offset={-70}>
              <button className="btn-outline">
                <FaBriefcase /> View Work
              </button>
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white/70 hover:text-white transition-colors"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content - Floating Cards */}
        <div className="relative h-[500px] flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-10 glass-card p-6 w-64 rotate-[-6deg] z-20 border-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-2xl shadow-[0_0_15px_rgba(0,198,255,0.3)]">
                <FaBriefcase />
              </div>
              <div>
                <h4 className="font-bold">Experience</h4>
                <p className="text-xs text-white/60">1+ Years</p>
              </div>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-400" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 right-10 glass-card p-6 w-64 rotate-[6deg] z-20 border-cyan-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <FaUserPlus />
              </div>
              <div>
                <h4 className="font-bold">Projects</h4>
                <p className="text-xs text-white/60">9+ Completed</p>
              </div>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050a10] bg-white/10" />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center backdrop-blur-3xl relative"
          >
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/40 blur-2xl absolute animate-pulse-glow" />
            <img 
              src="https://i.postimg.cc/tT8MCKjw/Whats-App-Image-2026-03-27-at-6-15-10-PM.jpg" 
              alt="Developer" 
              className="w-64 h-64 rounded-full object-cover border-4 border-white/20 relative z-10 shadow-[0_0_50px_rgba(0,198,255,0.3)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-24 py-12 border-y border-white/5 bg-white/5 backdrop-blur-md overflow-hidden whitespace-nowrap relative z-10">
        <div className="flex animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-12 text-3xl font-display font-bold text-gradient glow-text uppercase tracking-widest">
              <span>{item}</span>
              <span className="text-blue-500/50">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
