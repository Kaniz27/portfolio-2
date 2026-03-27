import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants/data';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-400 font-display font-semibold tracking-widest uppercase mb-4"
          >
            My Skills
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Expertise in <span className="text-gradient">Modern Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            I specialize in the MERN stack and modern frontend frameworks to build scalable and performant web applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group h-full"
            >
              <h3 className="text-xl font-display font-bold mb-8 text-blue-400 border-b border-white/10 pb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-blue-500/30"
                  >
                    <skill.icon className="text-3xl text-white/70 group-hover:text-blue-400 transition-colors" />
                    <span className="text-[10px] font-medium text-white/60 group-hover:text-white transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
