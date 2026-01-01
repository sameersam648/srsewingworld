import React from 'react';
import { Award, Users, Wrench, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductDetailPage from './pages/ProductDetailPage';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every machine meets our rigorous quality standards before reaching you.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our experienced team provides personalized recommendations for your needs.'
    },
    {
      icon: Wrench,
      title: 'Complete Service',
      description: 'From installation to maintenance, we support you every step of the way.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority, backed by excellent after-sales service.'
    }
  ];

  return (
    <section id="about" className="relative py-8 sm:py-16 lg:py-24 bg-gradient-to-br from-[#fff6f6] via-[#f9f6ff] to-[#f6faff] overflow-hidden">
      {/* New Decorative background */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <div className="absolute top-0 -left-10 w-80 h-80 bg-rose-200 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 -right-10 w-72 h-72 bg-sky-200 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-sm font-semibold text-[#ff416c] uppercase tracking-wide"
              >
                About Us
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 drop-shadow-lg"
              >
                Building Trust Through Quality & Excellence
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                For over 25 years, S R Sewing World has been the trusted name in professional sewing solutions. 
                We began as a small family business with a simple mission: to provide the highest quality 
                sewing machines and exceptional service to our community.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Today, we're proud to serve thousands of satisfied customers, from individual hobbyists 
                to large-scale industrial operations. Our commitment to excellence, combined with deep 
                industry expertise, makes us your ideal partner for all sewing needs.
              </motion.p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex space-x-4 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 group border border-[#ff416c]/10 hover:border-[#ff416c]/30"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-[#ff416c]/10 p-3 rounded-lg group-hover:bg-[#ff416c]/20 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-[#ff416c]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.img
                  src="https://i.pinimg.com/736x/de/51/45/de51458e34c69b6cdf1df1540630fa83.jpg"
                  alt="Sewing workshop"
                  className="w-full h-48 object-cover rounded-xl shadow-lg border-4 border-white/80 hover:border-[#ff416c]/40 transition-all duration-300 scale-100 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src="https://i.pinimg.com/736x/87/d7/a5/87d7a5d40177319718b82308744f18f1.jpg"
                  alt="Professional tailoring"
                  className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white/80 hover:border-[#ff416c]/40 transition-all duration-300 scale-100 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <div className="space-y-4 pt-8">
                <motion.img
                  src="https://i.pinimg.com/736x/b3/2d/87/b32d870e891e644b409be4c54822160f.jpg"
                  alt="Sewing machine details"
                  className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white/80 hover:border-[#ff416c]/40 transition-all duration-300 scale-100 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src="https://i.pinimg.com/736x/a2/3f/fa/a23ffae00ebf57088d752c2f6bd25259.jpg"
                  alt="Quality craftsmanship"
                  className="w-full h-48 object-cover rounded-xl shadow-lg border-4 border-white/80 hover:border-[#ff416c]/40 transition-all duration-300 scale-100 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
            {/* Floating accent shape */}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;