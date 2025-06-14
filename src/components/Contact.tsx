import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: ['123 Sewing Street, Textile District', 'Mumbai, Maharashtra 400001', 'India'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109', 'Mon-Sat: 9:00 AM - 7:00 PM'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@srsewingworld.com', 'support@srsewingworld.com', 'We reply within 24 hours'],
      action: 'Send Email'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Contact Us</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Get in Touch with Our Experts
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help! 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-600 transition-colors duration-300">
                    <info.icon className="h-6 w-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                    <button className="mt-3 text-teal-600 font-medium hover:text-teal-700 transition-colors">
                      {info.action} →
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="bg-teal-600 p-6 rounded-xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Quick Support</h4>
              </div>
              <p className="text-teal-100 mb-4">Need immediate assistance? Connect with us on WhatsApp for instant support.</p>
              <button className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
                WhatsApp Now
              </button>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Send className="h-6 w-6 text-teal-600" />
                <h4 className="text-xl font-bold text-gray-900">Send us a Message</h4>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Google Maps integration would go here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6" />
                <h4 className="text-xl font-bold">Business Hours</h4>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg mb-4">Ready to find your perfect sewing machine?</p>
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                Visit Our Showroom
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;