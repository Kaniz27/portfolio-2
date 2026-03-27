import React from 'react';
import { motion } from 'motion/react';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants/data';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-400 font-display font-semibold tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Let's Work <span className="text-gradient">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            I'm currently available for freelance work and full-time opportunities. Feel free to reach out!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Me</h4>
                  <p className="text-white/50">kanizfatematuly40@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-white/50">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/8801700000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-green-400 transition-colors"
                  >
                    +880 1700-458796
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xl text-white/70 hover:text-blue-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,198,255,0.3)] transition-all duration-300"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/50 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/50 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/50 uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/50 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Your Message"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-3 py-4">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
