import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle, Star, Play, Search, Shield, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { productData } from './productData';
import { useNavigate } from 'react-router-dom';

// Enhanced Starfield component for better visual appeal
const Starfield: React.FC<{ count?: number }> = ({ count = 50 }) => {
  const stars = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = Math.random() * 3 + 1; // 1px to 4px
    const duration = Math.random() * 8 + 3; // 3s to 11s
    const delay = Math.random() * 6;
    const isLarge = size > 2.5; // Larger stars get special treatment
    
    return (
      <motion.div
        key={i}
        className={`absolute bg-white rounded-full ${isLarge ? 'shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]' : 'shadow-[0_0_6px_1px_rgba(255,255,255,0.6)]'} backdrop-blur-sm`}
        style={{ 
          left: `${left}%`, 
          top: `${top}%`, 
          width: size, 
          height: size,
          filter: isLarge ? 'drop-shadow(0 0 8px rgba(255,255,255,0.9))' : 'drop-shadow(0 0 4px rgba(255,255,255,0.7))'
        }}
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1.2, 0.8],
          y: [0, Math.random() * 30 - 15, 0],
          x: [0, Math.random() * 20 - 10, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      />
    );
  });
  return <div className="absolute inset-0 pointer-events-none z-0">{stars}</div>;
};

const Hero: React.FC = () => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickPhone.trim()) {
      alert('Please enter your name and phone number.');
      return;
    }
    const mailto = `mailto:srsewingworld@gmail.com?subject=Request Callback&body=Name: ${encodeURIComponent(quickName)}%0D%0APhone: ${encodeURIComponent(quickPhone)}`;
    window.location.href = mailto;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert('Please enter a search term.');
      return;
    }
    const query = searchQuery.trim().toLowerCase();
    const match = productData.find(p => p.name.toLowerCase().includes(query));
    if (match) {
      navigate(`/products/${match.id}`);
    } else {
      alert('No matching product found.');
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#2d0000] via-[#cc0000] to-[#8b0000] overflow-hidden">
      {/* Enhanced Animated Background with Red Theme */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Starfield count={50} />
        
        {/* Primary red gradient orbs */}
        <motion.div
          className="absolute bg-gradient-to-r from-[#ff0000] to-[#ff4444] rounded-full w-[500px] h-[500px] top-[-200px] left-[-200px] filter blur-3xl opacity-25"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 45, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] rounded-full w-[400px] h-[400px] bottom-[-150px] right-[-150px] filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, -60, 45, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute bg-gradient-to-r from-[#ff4757] to-[#ff3742] rounded-full w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.3, 0.7, 1.2, 1],
            rotate: [0, 90, 180, 270, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 min-h-screen flex items-center z-10">
        <div className="w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Enhanced Trust Badge with Red Theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center bg-gradient-to-r from-[#ff0000]/20 to-[#ff4444]/20 text-[#ff6b6b] px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-[#ff0000]/30 shadow-xl backdrop-blur-md"
              >
                <Award className="h-5 w-5 mr-3" />
                25+ Years of Excellence in Sewing Solutions
              </motion.div>
              
              {/* Enhanced Main Heading with Red Theme */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight"
              >
                <span className="text-white drop-shadow-2xl">Your Trusted</span>
                <br />
                <span className="bg-gradient-to-r from-[#ff0000] via-[#ff4444] to-[#ff6b6b] bg-clip-text text-transparent drop-shadow-2xl">
                  Sewing Partner
                </span>
              </motion.h1>
              
              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Premium sewing machines, expert services, and professional support.
                <span className="font-bold text-white ml-2">Crafting excellence since 1998.</span>
              </motion.p>
              
              {/* Enhanced Search Bar with Red Theme */}
              <motion.form
                onSubmit={handleSearch}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="my-8 sm:my-12 max-w-2xl mx-auto lg:mx-0"
              >
                <div className="relative flex items-center bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 focus-within:border-white/50 focus-within:ring-4 focus-within:ring-[#ff0000]/30 transition-all duration-500">
                  <Search className="h-5 w-5 sm:h-6 sm:w-6 text-white/70 absolute left-4 sm:left-6 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search for products, e.g., 'Juki F5', 'Brother'..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent pl-12 sm:pl-16 pr-24 sm:pr-32 py-4 sm:py-5 text-white placeholder-white/60 focus:outline-none text-base sm:text-lg font-medium"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ff0000] to-[#ff4444] text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold hover:from-[#ff4444] hover:to-[#ff0000] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                  >
                    Search
                  </button>
                </div>
              </motion.form>
              
              {/* Enhanced CTA Buttons with Red Theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
              >
                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-[#ff0000] to-[#ff4444] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold hover:from-[#ff4444] hover:to-[#ff0000] transition-all duration-300 text-center shadow-2xl hover:shadow-3xl text-lg sm:text-xl"
                >
                  <span className="flex items-center justify-center">
                    Explore Products
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </motion.a>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white/10 backdrop-blur-xl text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-center shadow-2xl hover:shadow-3xl text-lg sm:text-xl"
                >
                  <span className="flex items-center justify-center">
                    <Phone className="mr-3 h-6 w-6" />
                    Contact Us
                  </span>
                </motion.a>
              </motion.div>
              
              {/* Trust Indicators with Red Theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 sm:mt-12"
              >
                <div className="flex items-center text-white/80">
                  <Shield className="h-5 w-5 mr-2 text-[#ff6b6b]" />
                  <span className="text-sm font-medium">Warranty</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Clock className="h-5 w-5 mr-2 text-[#ff6b6b]" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center text-white/80">
                  <CheckCircle className="h-5 w-5 mr-2 text-[#ff6b6b]" />
                  <span className="text-sm font-medium">Quality Assured</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Right Image Card with Red Theme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 60 }}
              className="lg:col-span-5 mt-12 sm:mt-16 lg:mt-0"
            >
              <div className="relative group">
                {/* Enhanced glow effects with Red Theme */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#ff0000] via-[#ff4444] to-[#ff6b6b] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Enhanced card container */}
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20 group-hover:border-white/40 transition-all duration-500">
                  <motion.img
                    src="/images/jack_f5hero.png"
                    alt="Jack F5 Industrial Sewing Machine"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    whileHover={{ scale: 1.08, rotateY: 5 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 10 }}
                  />
                  
                  {/* Floating badge with Red Theme */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-[#ff0000] to-[#ff4444] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  >
                    Premium
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator with Red Theme */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center items-start bg-white/10 shadow-lg backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2 h-6 bg-gradient-to-b from-[#ff0000] to-[#ff4444] rounded-full mt-3 shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;