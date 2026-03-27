import React from 'react';
import { Link } from 'react-scroll';
import { NAV_LINKS } from '../constants/data';
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="py-20 relative z-10 overflow-hidden">
      {/* Glassmorphism Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050a10]/90 backdrop-blur-xl -z-10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left Column */}
          <div className="md:col-span-5">
            <Link to="hero" smooth={true} className="cursor-pointer flex items-center gap-3 mb-6 group">
              <Logo className="text-3xl" />
              
            </Link>
            <p className="text-white/50 leading-relaxed max-w-md text-lg">
              Frontend Developer building accessible, performant, and visually engaging web applications that solve real problems.
            </p>
          </div>

          {/* Middle Column - Quick Links & Navigation */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-neon-blue font-orbitron font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="hero" smooth={true} className="text-white/50 hover:text-neon-blue transition-colors cursor-pointer">Home</Link></li>
                <li><Link to="projects" smooth={true} className="text-white/50 hover:text-neon-blue transition-colors cursor-pointer">Projects</Link></li>
                <li><Link to="about" smooth={true} className="text-white/50 hover:text-neon-blue transition-colors cursor-pointer">About</Link></li>
                <li><Link to="education" smooth={true} className="text-white/50 hover:text-neon-blue transition-colors cursor-pointer">Education</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-neon-blue font-orbitron font-bold text-lg mb-6 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                <li><Link to="skills" smooth={true} className="text-white/50 hover:text-neon-blue transition-colors cursor-pointer">Skills</Link></li>
                <li><Link to="experience" smooth={true} className="text-white/50 hover:text-neon-blue transition-colors cursor-pointer">Experience</Link></li>
                <li><Link to="contact" smooth={true} className="text-white/50 hover:text-neon-blue transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-neon-blue font-orbitron font-bold text-lg mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4 text-white/50">
                <FaMapMarkerAlt className="text-neon-blue text-xl" />
                <span className="text-lg">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-4 text-white/50">
                <FaEnvelope className="text-neon-blue text-xl" />
                <span className="text-lg">studentID@gai.edu.bd</span>
              </li>
            </ul>
            
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl text-white/70 hover:text-[#1877F2] hover:scale-110 transition-all duration-300"><FaFacebook /></a>
              <a href="https://linkedin.com" target="_blank" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl text-white/70 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"><FaLinkedin /></a>
              <a href="https://instagram.com" target="_blank" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl text-white/70 hover:text-[#E4405F] hover:scale-110 transition-all duration-300"><FaInstagram /></a>
              <a href="https://wa.me/8801700000000" target="_blank" className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl text-white/70 hover:text-[#25D366] hover:scale-110 transition-all duration-300"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm tracking-widest uppercase font-medium">
            © 2026 Kanis Fatema. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
