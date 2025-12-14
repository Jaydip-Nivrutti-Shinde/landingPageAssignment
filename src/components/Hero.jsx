import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Zap, 
  Shield,
  TrendingUp,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '10K+', label: 'Active Users', color: 'from-blue-500 to-cyan-500' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '99.9%', label: 'Uptime', color: 'from-emerald-500 to-green-500' },
    { icon: <Clock className="w-5 h-5" />, value: '24/7', label: 'Support', color: 'from-violet-500 to-purple-500' },
    { icon: <Sparkles className="w-5 h-5" />, value: '50+', label: 'Features', color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section id="home" className="section-padding relative pt-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100 mb-6">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">v3.0 Now Available</span>
            </div>

            <h1 className="section-title">
              Transform Your{' '}
              <span className="gradient-text">Digital</span>{' '}
              Experience
            </h1>

            <p className="section-subtitle">
              Aurora is the enterprise-grade platform for creating stunning digital experiences. 
              With cutting-edge features and professional interface, we help businesses scale efficiently.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.button
                className="btn-primary flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="btn-secondary flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl border border-gray-200 bg-white shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} mb-3 shadow-md`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-10"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-strong overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-600">Live Dashboard Preview</div>
                </div>

                {/* Chart Area */}
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Performance</span>
                      <span className="text-sm font-medium text-emerald-600">+24%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">User Growth</span>
                      <span className="text-sm font-medium text-emerald-600">+42%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-xl font-bold text-gray-900 mb-1">1.2K</div>
                    <div className="text-xs text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-xl font-bold text-gray-900 mb-1">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center p-4 rounded-lg border border-gray-200 bg-gray-50">
                    <div className="text-xl font-bold text-gray-900 mb-1">2.4s</div>
                    <div className="text-xs text-gray-600">Load Time</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10 blur-xl"></div>
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full opacity-10 blur-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div 
          className="mt-20 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-center text-sm text-gray-500 mb-8 font-medium">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['TechCorp', 'InnovateX', 'GlobalSys', 'DataFlow', 'CloudNine'].map((company, index) => (
              <div 
                key={index} 
                className="text-gray-400 font-semibold text-lg hover:text-primary-600 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;