import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Fashion Designer',
      content: 'S R Sewing World has been my go-to place for all sewing machine needs. Their expertise and after-sales service are exceptional. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Garment Manufacturer',
      content: 'The industrial machines from S R Sewing World have significantly improved our production efficiency. Great quality and reliable service.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Meera Patel',
      role: 'Home Sewing Enthusiast',
      content: 'I bought my first sewing machine from them 5 years ago, and it still works perfectly. Their training and support made learning so much easier.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'Amit Singh',
      role: 'Tailor Shop Owner',
      content: 'Excellent service and genuine products. The AMC service has kept our machines running smoothly for years. True professionals!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="relative py-8 sm:py-16 lg:py-24 bg-gradient-to-br from-[#fff6f6] via-[#f9f6ff] to-[#f6faff] overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-10 z-0 animate-spin-slow" viewBox="0 0 500 500" fill="none">
        <circle cx="250" cy="250" r="200" stroke="#ff416c" strokeWidth="60" strokeDasharray="60 60" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-10 z-0 animate-float" viewBox="0 0 300 300" fill="none">
        <rect x="40" y="40" width="220" height="220" rx="80" fill="#ff416c" />
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-[#ff416c] uppercase tracking-wide"
          >
            Customer Testimonials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 drop-shadow-lg"
          >
            What Our Customers Say
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with S R Sewing World.
          </motion.p>
        </div>
        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-white/70 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-[#ff416c]/10 hover:border-[#ff416c]/30"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-[#ff416c] opacity-50" />
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                    ))}
                  </div>
                </div>
                {/* Content */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                {/* Customer Info */}
                <div className="flex items-center space-x-3 sm:space-x-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#ff416c]/30 group-hover:border-[#ff416c] shadow group-hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.08 }}
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Trust Indicators */}
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
            {
              value: (
                <div className="flex justify-center text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
                  ))}
                </div>
              ),
              label: (
                <>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-gray-600 text-sm sm:text-base">Average Rating</div>
                </>
              )
            },
            {
              value: <div className="text-2xl sm:text-3xl font-bold text-gray-900">1000+</div>,
              label: <div className="text-gray-600 text-sm sm:text-base">Happy Customers</div>
            },
            {
              value: <div className="text-2xl sm:text-3xl font-bold text-gray-900">98%</div>,
              label: <div className="text-gray-600 text-sm sm:text-base">Customer Satisfaction</div>
            }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="space-y-2"
            >
              {stat.value}
              {stat.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;