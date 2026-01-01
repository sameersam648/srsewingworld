import React from 'react';
import { motion } from 'framer-motion';

const Brands: React.FC = () => {
  const brands = [
    { name: 'Juki', logo: 'JUKI' },
    { name: 'Brother', logo: 'BROTHER' },
    { name: 'Singer', logo: 'SINGER' },
    { name: 'Usha', logo: 'USHA' },
    { name: 'Jack', logo: 'JACK' },
    { name: 'Zoje', logo: 'ZOJE' },
    { name: 'Typical', logo: 'TYPICAL' },
    { name: 'Gemsy', logo: 'GEMSY' }
  ];

  return (
    <section id="brands" className="py-8 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-gray-600 uppercase tracking-wide"
          >
            Trusted Brands
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
          >
            We Partner with Industry Leaders
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our commitment to quality means working exclusively with the most trusted and 
            reliable sewing machine manufacturers in the world.
          </motion.p>
        </div>
        {/* Brands Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-transparent"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-400 group-hover:text-gray-800 transition-colors duration-300">
                  {brand.logo}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{brand.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-8 text-center"
        >
          {[
            { value: '15+', label: 'Trusted Brand Partners' },
            { value: '500+', label: 'Machine Models Available' },
            { value: '100%', label: 'Authentic Products' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="space-y-2"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;