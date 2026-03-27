import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-neon-blue font-orbitron font-semibold tracking-widest uppercase mb-4"
          >
            My Portfolio
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-6"
          >
            Featured <span className="text-neon-blue">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 max-w-2xl mx-auto font-roboto"
          >
            A collection of my recent work, showcasing my skills in full-stack development and design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-transparent to-transparent opacity-60" />
                
                {/* Featured Badge */}
                {'featured' in project && project.featured && (
                  <div className="absolute top-4 left-4 px-4 py-1 bg-neon-blue text-dark-blue font-black text-[10px] uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                    Featured
                  </div>
                )}

                {/* Overlay with Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-blue/40 backdrop-blur-sm">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-white hover:bg-neon-blue hover:text-dark-blue transition-all duration-300"
                    title="GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl text-white hover:bg-neon-blue hover:text-dark-blue transition-all duration-300"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white/5 text-neon-blue border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 font-roboto">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                   <div className="flex gap-4">
                      <a href={project.github} className="flex items-center gap-2 text-xs font-bold text-white/70 hover:text-neon-blue transition-colors">
                        <FaGithub /> GitHub
                      </a>
                      <a href={project.live} className="flex items-center gap-2 text-xs font-bold text-white/70 hover:text-neon-blue transition-colors">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
