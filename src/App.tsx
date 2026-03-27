import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { EducationExperience } from './components/EducationExperience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Fixed Animated Background */}
      <AnimatedBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationExperience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Floating Elements / Glows */}
      <div className="fixed top-1/4 -left-20 w-80 h-80 bg-blue-500/10 blur-[100px] pointer-events-none z-[-1]" />
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none z-[-1]" />
    </div>
  );
}
