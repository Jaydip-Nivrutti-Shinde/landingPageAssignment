import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  Heart
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "10K+", label: "Active Users", color: "from-blue-500 to-cyan-500" },
    { icon: <Award className="w-8 h-8" />, value: "50+", label: "Awards Won", color: "from-yellow-500 to-orange-500" },
    { icon: <Globe className="w-8 h-8" />, value: "100+", label: "Countries", color: "from-green-500 to-emerald-500" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "99.9%", label: "Uptime", color: "from-purple-500 to-violet-500" },
  ];

  const features = [
    "Modern and clean design",
    "Fully responsive layout",
    "Optimized for performance",
    "SEO friendly structure",
    "Easy to customize",
    "Regular updates",
    "24/7 support",
    "Free lifetime updates"
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 mb-6">
              <span className="text-sm font-medium text-primary-300">About Us</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Why Choose <span className="gradient-text">Aurora</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Aurora is more than just a template - it's a complete solution for your next project. 
              Built with modern technologies and best practices in mind, it will save you hundreds 
              of development hours.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-6 backdrop-blur-xl border border-white/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">User Satisfaction</span>
                  <span className="text-primary-400 font-semibold">98%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Performance</span>
                  <span className="text-primary-400 font-semibold">95%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">Support Response</span>
                  <span className="text-primary-400 font-semibold">99%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "99%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </div>
              </div>
            </div>

            {/* Team Stats */}
            <motion.div 
              className="glass-effect rounded-2xl p-6 mt-8 backdrop-blur-xl border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-lg font-semibold text-white">Our Team</span>
                  </div>
                  <p className="text-gray-400">50+ experts working together</p>
                </div>
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-dark-800 bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-xs font-bold text-white"
                    >
                      {i === 3 ? "+46" : `U${i + 1}`}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;