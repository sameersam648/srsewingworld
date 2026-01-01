import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1e002a] via-[#2d0b2e] to-[#2d0b2e] text-white overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-10 z-0 animate-spin-slow" viewBox="0 0 500 500" fill="none">
        <circle cx="250" cy="250" r="200" stroke="#ff416c" strokeWidth="60" strokeDasharray="60 60" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-10 z-0 animate-float" viewBox="0 0 300 300" fill="none">
        <rect x="40" y="40" width="220" height="220" rx="80" fill="#ff416c" />
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {/* Unit 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="space-y-2 bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-lg border border-[#ff416c]/10"
          >
            <h3 className="text-base sm:text-lg font-bold">Unit 1</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-[#ff416c] mt-1 flex-shrink-0" />
              <a 
                href="https://www.google.com/maps/place/S+R+Sewing+World/data=!4m7!3m6!1s0x3bae154ae96dbef7:0xa9f4d23eac3c9358!8m2!3d12.9064352!4d77.630724!16s%2Fg%2F11s68kyngd!19sChIJ975t6UoVrjsRWJM8rD7S9Kk?authuser=0&hl=en&rclk=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs sm:text-sm text-gray-300 leading-tight hover:text-[#ff416c] transition-colors"
              >
                Unit -01, 1145, oppo SBI Bank,Main Road,<br />
                Mangammanapalya, Bommanahalli,<br />
                Bengaluru, Karnataka 560068.
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#ff416c]" />
              <a 
                href="tel:+919019229243" 
                className="text-xs sm:text-sm text-gray-300 hover:text-[#ff416c] transition-colors"
              >
                +91 9019229243
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#ff416c]" />
              <a 
                href="mailto:srsewingworld@gmail.com" 
                className="text-xs sm:text-sm text-gray-300 hover:text-[#ff416c] transition-colors"
              >
                srsewingworld@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-[#ff416c]" />
              <p className="text-xs sm:text-sm text-gray-300">Everyday: 10:00 AM - 8:00 PM</p>
            </div>
          </motion.div>
          {/* Unit 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="space-y-2 bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-lg border border-[#ff416c]/10"
          >
            <h3 className="text-base sm:text-lg font-bold">Unit 2</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 text-[#ff416c] mt-1 flex-shrink-0" />
              <a 
                href="https://www.google.com/maps/place/S+R+Sewing+World+,+Unit+-02/data=!4m7!3m6!1s0x3bae15c262884675:0x970576321950dd04!8m2!3d12.905004!4d77.6355013!16s%2Fg%2F11vpvb31y8!19sChIJdUaIYsIVrjsRBN1QGTJ2BZc?authuser=0&hl=en&rclk=1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs sm:text-sm text-gray-300 leading-tight hover:text-[#ff416c] transition-colors"
              >
                2nd Cross Rd, beside Om shakti temple, Mangammanapalya, Bengaluru, Karnataka 560068
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#ff416c]" />
              <a 
                href="tel:+918861727652" 
                className="text-xs sm:text-sm text-gray-300 hover:text-[#ff416c] transition-colors"
              >
                +91 8861727652
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#ff416c]" />
              <a 
                href="mailto:srsewingworld@gmail.com" 
                className="text-xs sm:text-sm text-gray-300 hover:text-[#ff416c] transition-colors"
              >
                srsewingworld@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-[#ff416c]" />
              <p className="text-xs sm:text-sm text-gray-300">Everyday: 9:00 AM - 10:00 PM</p>
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="space-y-2 bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-lg border border-[#ff416c]/10"
          >
            <h3 className="text-base sm:text-lg font-bold">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/#home" className="text-xs sm:text-sm text-gray-300 hover:text-[#ff416c] transition-colors">Home</Link></li>
              <li><Link to="/#about" className="text-xs sm:text-sm text-gray-300 hover:text-[#ff416c] transition-colors">About Us</Link></li>
              <li><Link to="/#products" className="text-xs sm:text-sm text-gray-300 hover:text-[#ff416c] transition-colors">Products</Link></li>
              <li><Link to="/#contact" className="text-xs sm:text-sm text-gray-300 hover:text-[#ff416c] transition-colors">Contact</Link></li>
            </ul>
          </motion.div>
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="space-y-2 bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-lg border border-[#ff416c]/10"
          >
            <h3 className="text-base sm:text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=100063803184315" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ff416c] transition-colors hover:shadow-glow">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/sr_sewing_world/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ff416c] transition-colors hover:shadow-glow">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@SR_Sewing_World" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ff416c] transition-colors hover:shadow-glow">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800 text-center text-gray-400"
        >
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} SR Sewing World. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;