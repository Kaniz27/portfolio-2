import React from 'react';
import { motion } from 'motion/react';

const STATS = [
  { label: 'Experience', value: '1+ Years' },
  { label: 'Projects Completed', value: '8+' },
  { label: 'Training Hours', value: '300+' },
  { label: 'Specialization', value: 'MERN Stack' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Animated Blobs behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-30 group-hover:opacity-60 animate-blob transition-opacity" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(0,198,255,0.4)] transition-transform duration-500 group-hover:scale-105">
              <img 
                src="https://i.postimg.cc/Y215CSvg/Whats-App-Image-2026-03-27-at-6-26-18-PM.jpg" 
                alt="Kanis Fatema" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Content - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-blue-400 font-display font-semibold tracking-widest uppercase mb-4">
            About Me
          </h4>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Hi, I'm <span className="text-gradient">Kaniz Fatema</span>
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            I'm a passionate Full Stack Developer from Dhaka, Bangladesh. I specialize in building scalable backend systems and modern frontend applications using the MERN stack. My journey in tech is driven by a desire to create impactful digital experiences that solve real-world problems.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 border-l-4 border-l-blue-500"
              >
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
