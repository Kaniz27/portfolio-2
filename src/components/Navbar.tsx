import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const aboutLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black font-orbitron text-neon-blue flex items-center gap-2"
          >
            <span className="border-2 border-neon-blue px-2 py-1 rounded-lg">&lt;KF /&gt;</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-300 hover:text-neon-blue transition-colors font-medium cursor-pointer">
              About <FiChevronDown className="group-hover:rotate-180 transition-transform" />
            </button>
            <div className="dropdown-menu">
              {aboutLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="dropdown-item block"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-gray-300 hover:text-neon-blue transition-colors font-medium cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="px-6 py-2 border border-neon-blue text-neon-blue rounded-full hover:bg-neon-blue/10 transition-all font-medium"
          >
            Resume
          </a>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="px-6 py-2 bg-neon-blue text-dark-blue rounded-full hover:bg-opacity-90 transition-all font-bold cursor-pointer neon-glow"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-3xl text-neon-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">About</p>
              {aboutLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-gray-300 hover:text-neon-blue"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-gray-300 hover:text-neon-blue"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <a href="/resume.pdf" className="text-center py-3 border border-neon-blue text-neon-blue rounded-xl">Resume</a>
                <Link to="contact" smooth={true} className="text-center py-3 bg-neon-blue text-dark-blue font-bold rounded-xl">Hire Me</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
