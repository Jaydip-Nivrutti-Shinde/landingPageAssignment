import React from 'react';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Cpu
} from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { icon: <Sparkles className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500', delay: 0 },
    { icon: <Zap className="w-4 h-4" />, color: 'from-emerald-500 to-teal-500', delay: 0.5 },
    { icon: <Shield className="w-4 h-4" />, color: 'from-violet-500 to-purple-500', delay: 1 },
    { icon: <Cpu className="w-4 h-4" />, color: 'from-amber-500 to-orange-500', delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute rounded-lg bg-white border border-gray-200 shadow-soft p-3
                     animate-float${index % 2 === 0 ? '-slow' : ''}
                     flex items-center justify-center`}
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            width: `${40 + Math.random() * 40}px`,
            height: `${40 + Math.random() * 40}px`,
            animationDelay: `${element.delay}s`,
            opacity: 0.4,
          }}
        >
          <div className={`bg-gradient-to-br ${element.color} p-2 rounded-lg`}>
            <div className="text-white">
              {element.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;