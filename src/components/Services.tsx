import React from 'react';
import { Wrench, Shield, GraduationCap, Headphones, Clock, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
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
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Our Services</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Complete Service Solutions
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond selling quality machines, we provide comprehensive services to ensure 
            your sewing operations run smoothly and efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-teal-100 p-4 rounded-xl group-hover:bg-teal-600 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-2xl lg:text-3xl font-bold">Need Service Support?</h4>
              <p className="text-teal-100 text-lg">
                Our expert technicians are ready to help you with any service requirements. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Service
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                  Call Now
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Same Day</div>
                <div className="text-sm text-teal-100">Service Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                <Shield className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Warranty</div>
                <div className="text-sm text-teal-100">On All Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;