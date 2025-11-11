import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:srsewingworld@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-8 sm:py-16 bg-gradient-to-br from-[#fff6f6] via-[#f9f6ff] to-[#f6faff] overflow-hidden">
      {/* Removed animated SVG backgrounds */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 drop-shadow-lg"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Get in touch with us for any queries about our products or services
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-lg border border-[#ff416c]/10">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#ff416c]/10 p-2 rounded-lg">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff416c]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Call us at</p>
                    <a href="tel:+919019229243" className="font-semibold text-[#ff416c] hover:text-[#ff4b2b] transition-colors block text-sm sm:text-base">
                      +91 9019229243
                    </a>
                    <a href="tel:+918861727652" className="font-semibold text-[#ff416c] hover:text-[#ff4b2b] transition-colors block text-sm sm:text-base">
                      +91 8861727652
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#ff416c]/10 p-2 rounded-lg">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff416c]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Email us at</p>
                    <a href="mailto:srsewingworld@gmail.com" className="font-semibold text-[#ff416c] hover:text-[#ff4b2b] transition-colors text-sm sm:text-base">
                      srsewingworld@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#ff416c]/10 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff416c]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Visit us at</p>
                    <p className="font-semibold text-gray-900">
                    <a href="https://www.google.com/maps/place/S+R+Sewing+World/data=!4m7!3m6!1s0x3bae154ae96dbef7:0xa9f4d23eac3c9358!8m2!3d12.9064352!4d77.630724!16s%2Fg%2F11s68kyngd!19sChIJ975t6UoVrjsRWJM8rD7S9Kk?authuser=0&hl=en&rclk=1" className="font-semibold text-[#ff416c] hover:text-[#ff4b2b] transition-colors block text-sm sm:text-base">
                      Unit -01, 1145, oppo SBI Bank,Main Road,<br />
                      Mangammanapalya, Bommanahalli,<br />
                      Bengaluru, Karnataka 560068.
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-[#ff416c]/10 p-2 rounded-lg">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#ff416c]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Business Hours</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Everyday: 10:00 AM - 8:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-lg border border-[#ff416c]/10"
            >
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Location</h4>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8405.954701970977!2d77.630724!3d12.906435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae154ae96dbef7%3A0xa9f4d23eac3c9358!2sS%20R%20Sewing%20World!5e1!3m2!1sen!2sin!4v1750107498724!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SR Sewing World Location"
                  aria-label="Google Maps showing SR Sewing World location"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
          {/* Contact Form and Card */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-lg border border-[#ff416c]/10 h-[500px] sm:h-[600px] flex flex-col"
            >
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff416c] focus:border-transparent bg-white/80 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff416c] focus:border-transparent bg-white/80 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff416c] focus:border-transparent bg-white/80 text-sm sm:text-base"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="flex-1 min-h-[100px] sm:min-h-[120px]">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full h-[100px] sm:h-[120px] px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff416c] focus:border-transparent resize-none bg-white/80 text-sm sm:text-base"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="pt-2 sm:pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.04 }}
                    className="w-full bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:from-[#ff4b2b] hover:to-[#ff416c] transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
            {/* Why Choose Us Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-[#fff6f6] via-[#f9f6ff] to-[#f6faff] rounded-2xl p-6 shadow-lg border border-[#ff416c]/10 flex flex-col items-center text-center"
            >
              <h4 className="text-xl font-bold text-[#ff416c] mb-4">Why Choose SR Sewing World?</h4>
              <ul className="space-y-3 text-gray-700 text-base">
                <li><span className="font-semibold text-[#ff416c]">✔ Expert Guidance:</span> 30+ years of experience</li>
                <li><span className="font-semibold text-[#ff416c]">✔ Genuine Products:</span> 100% original brands</li>
                <li><span className="font-semibold text-[#ff416c]">✔ Fast Service:</span> Quick delivery & installation</li>
                <li><span className="font-semibold text-[#ff416c]">✔ Warranty Support:</span> 1-year service, 3-year PCB</li>
                <li><span className="font-semibold text-[#ff416c]">✔ Customer Care:</span> Friendly, reliable support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;