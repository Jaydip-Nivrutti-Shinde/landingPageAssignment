import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ icon, title, description, position, delay = 0 }) => {
  const positions = [
    { top: '10%', left: '-12%' },
    { top: '50%', right: '-12%', transform: 'translateY(-50%)' },
    { bottom: '15%', left: '-8%' },
  ];

  const colors = [
    'from-blue-500 to-cyan-500',
    'from-emerald-500 to-green-500',
    'from-violet-500 to-purple-500'
  ];

  return (
    <motion.div
      className={`absolute glass-effect rounded-xl p-5 w-56 backdrop-blur-xl border border-white/10 shadow-lg card-hover z-20`}
      style={positions[position % 3]}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors[position % 3]} flex items-center justify-center shadow-md`}>
            {React.cloneElement(icon, { className: "w-5 h-5 text-white" })}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
          <p className="text-sm text-secondary-400">{description}</p>
        </div>
      </div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-xl border border-primary-500/20 pointer-events-none"></div>
    </motion.div>
  );
};

export default AnimatedCard;