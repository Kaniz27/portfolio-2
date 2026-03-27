import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={cn("flex items-center font-display font-bold text-2xl cursor-pointer group", className)}
    >
      <span className="text-blue-500 group-hover:text-cyan-400 transition-colors duration-300">&lt;</span>
      <span className="text-gradient glow-text mx-1">KF</span>
      <span className="text-blue-500 group-hover:text-cyan-400 transition-colors duration-300">/&gt;</span>
    </motion.div>
  );
};
