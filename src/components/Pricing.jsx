import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  X, 
  Zap, 
  Shield, 
  Globe,
  Star,
  Crown
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams",
    monthlyPrice: "$29",
    yearlyPrice: "$290",
    color: "from-blue-500 to-cyan-500",
    icon: <Zap className="w-5 h-5" />,
    popular: false,
    features: [
      { included: true, text: "Up to 10 team members" },
      { included: true, text: "Basic analytics dashboard" },
      { included: true, text: "50GB storage" },
      { included: true, text: "Email support" },
      { included: false, text: "Advanced API access" },
      { included: false, text: "Priority support" },
    ]
  },
  // ... update other plans
];

  const toggleVariants = {
    monthly: { x: 0 },
    yearly: { x: '100%' }
  };

  return (
    <section id="pricing" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 mb-4">
            <span className="text-sm font-medium text-primary-300">Pricing</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Choose the perfect plan for your needs. All plans include a 30-day money-back guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center space-x-4 bg-dark-800 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 px-2 py-1 text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredPlan(index)}
                onHoverEnd={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Glow Effect */}
                <motion.div 
                  className={`absolute -inset-0.5 bg-gradient-to-br ${plan.color} rounded-3xl blur opacity-0 ${
                    hoveredPlan === index ? 'opacity-30' : ''
                  } transition-opacity duration-300`}
                  animate={hoveredPlan === index ? { scale: 1.02 } : { scale: 1 }}
                />

                {/* Pricing Card */}
                <div className={`relative glass-effect rounded-3xl p-8 backdrop-blur-xl border ${
                  plan.popular 
                    ? 'border-purple-500/50' 
                    : 'border-white/10'
                } transition-all duration-300 ${
                  hoveredPlan === index ? 'scale-105' : ''
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} mb-4 mx-auto`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-end justify-center">
                      <span className="text-5xl font-bold text-white">
                        {billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'yearly' ? 'year' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-gray-400 mt-2">
                        ${parseInt(plan.monthlyPrice.replace('$', '')) * 0.8}/month equivalent
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-red-500/50 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/30'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </motion.button>

                  {/* Trial Info */}
                  <p className="text-center text-sm text-gray-400 mt-4">
                    30-day free trial • No credit card required
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Enterprise CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col lg:flex-row items-center justify-between gap-8 p-8 rounded-3xl glass-effect backdrop-blur-xl border border-white/10 w-full max-w-4xl mx-auto">
            <div className="text-left">
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="w-8 h-8 text-primary-400" />
                <h3 className="text-2xl font-bold text-white">Need a custom solution?</h3>
              </div>
              <p className="text-gray-400 max-w-2xl">
                Our enterprise plan offers custom pricing, dedicated support, and tailored features for large organizations.
              </p>
            </div>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;