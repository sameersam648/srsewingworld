import React, { useState } from 'react';
import { Wrench, Shield, GraduationCap, Headphones, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceScheduleModal from './ServiceScheduleModal';

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      icon: Wrench,
      title: 'Repair & Maintenance',
      description: 'Expert repair services for all sewing machine brands with genuine spare parts.',
      features: ['Expert Technicians', 'Genuine Parts', 'Quick Turnaround', 'Quality Guarantee']
    },
    {
      icon: Shield,
      title: 'Annual Maintenance Contract',
      description: 'Comprehensive AMC packages to keep your machines running at peak performance.',
      features: ['Regular Check-ups', 'Priority Service', 'Cost Savings', 'Extended Warranty']
    },
    {
      icon: GraduationCap,
      title: 'Installation & Training',
      description: 'Professional installation and comprehensive training for optimal machine usage.',
      features: ['Expert Installation', 'Hands-on Training', 'Operation Manual', 'Follow-up Support']
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Round-the-clock customer support for any queries or technical assistance.',
      features: ['Phone Support', 'WhatsApp Support', 'Email Support', 'Remote Assistance']
    }
  ];

  return (
    <section id="services" className="relative py-8 sm:py-16 lg:py-24 bg-gradient-to-br from-[#fff6f6] via-[#f9f6ff] to-[#f6faff] overflow-hidden">
      {/* New Decorative background */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-200 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
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
            Our Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 drop-shadow-lg"
          >
            Complete Service Solutions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Beyond selling quality machines, we provide comprehensive services to ensure 
            your sewing operations run smoothly and efficiently.
          </motion.p>
        </div>
        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-white/70 hover:bg-white-100 backdrop-blur-lg p-6 sm:p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group border border-[#ff416c]/10 hover:border-[#ff416c]/30"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-[#ff416c]/10 p-4 rounded-xl group-hover:bg-[#ff416c]/30 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-[#ff416c] group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#ff416c] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold">Need Service Support?</h4>
              <p className="text-white/80 text-lg">
                Our expert technicians are ready to help you with any service requirements. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#ff416c] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                  aria-label="Schedule Service"
                >
                  Schedule Service
                </button>
                <a
                  href="tel:+919019229243"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#ff416c] transition-colors text-center"
                  aria-label="Call Now +91 9019229243"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Same Day</div>
                <div className="text-sm text-white/80">Service Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Warranty</div>
                <div className="text-sm text-white/80">On All Services</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Service Schedule Modal */}
      <ServiceScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Services;