import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION, EXPERIENCE, TRAINING, ADDITIONAL_INFO } from '../constants/data';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaLanguage, FaLightbulb } from 'react-icons/fa';

export const EducationExperience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Experience Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h4 className="text-blue-400 font-display font-semibold tracking-widest uppercase mb-4">
                My Journey
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Professional <span className="text-gradient">Experience</span>
              </h2>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:h-full before:w-0.5 before:bg-white/10">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={exp.period}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-20 group"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full glass flex items-center justify-center text-2xl text-blue-400 z-10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,198,255,0.2)]">
                    <FaBriefcase />
                  </div>
                  <div className="glass-card p-8 rounded-2xl border-l-4 border-l-blue-500 group-hover:shadow-[0_0_30px_rgba(0,198,255,0.1)] transition-all duration-300">
                    <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-display font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-lg text-white/70 mb-4">{exp.company}</h4>
                    {exp.roles ? (
                      <ul className="space-y-2">
                        {exp.roles.map((role, rIdx) => (
                          <li key={rIdx} className="text-white/60 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            {role}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/50 leading-relaxed">{exp.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div id="education">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h4 className="text-cyan-400 font-display font-semibold tracking-widest uppercase mb-4">
                Academic Background
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                My <span className="text-gradient">Education</span>
              </h2>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:h-full before:w-0.5 before:bg-white/10">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.year}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-20 group"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full glass flex items-center justify-center text-2xl text-cyan-400 z-10 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                    <FaGraduationCap />
                  </div>
                  <div className="glass-card p-8 rounded-2xl border-l-4 border-l-cyan-500 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-300">
                    <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2 block">
                      {edu.year}
                    </span>
                    <h3 className="text-2xl font-display font-bold mb-1">{edu.degree}</h3>
                    <h4 className="text-lg text-white/70 mb-2">{edu.institution}</h4>
                    <p className="text-white/50 font-medium">{edu.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Training Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h4 className="text-blue-400 font-display font-semibold tracking-widest uppercase mb-4">
              Specialized Skills
            </h4>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Professional <span className="text-gradient">Training</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {TRAINING.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl group hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <FaCertificate />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2 block">
                      {item.period}
                    </span>
                    <h3 className="text-2xl font-display font-bold mb-1">{item.title}</h3>
                    <h4 className="text-lg text-white/80 mb-2">{item.company}</h4>
                    <p className="text-sm text-white/40 mb-4">{item.location}</p>
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="text-white/60 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl text-blue-400">
                <FaLanguage />
              </div>
              <h3 className="text-2xl font-display font-bold">Languages</h3>
            </div>
            <div className="space-y-4">
              {ADDITIONAL_INFO.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Extra-Curricular */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl text-cyan-400">
                <FaLightbulb />
              </div>
              <h3 className="text-2xl font-display font-bold">Extra-Curricular</h3>
            </div>
            <ul className="space-y-4">
              {ADDITIONAL_INFO.extraCurricular.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
