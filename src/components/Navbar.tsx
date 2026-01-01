import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-nav-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-nav-open');
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-nav-open');
    };
  }, [isMenuOpen]);

  // Smooth scroll for anchor links on the same page
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
      }
    }
    // If not on the homepage, the Link component will handle navigation.
  };

  // Highlight active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (location.pathname.startsWith('/blog')) {
        setActiveSection('blog');
        return;
      }
      
      if (location.pathname === '/') {
        const sections = ['home', 'products', 'services', 'about', 'contact'];
        let found = 'home';
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && window.scrollY + 80 >= el.offsetTop) {
            found = id;
          }
        }
        setActiveSection(found);
      } else {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { href: '/#home', label: 'Home', id: 'home' },
    { href: '/#products', label: 'Products', id: 'products' },
    { href: '/#services', label: 'Services', id: 'services' },
    { href: '/#about', label: 'About', id: 'about' },
    { href: '/blog', label: 'Blog', id: 'blog' },
    { href: '/#contact', label: 'Contact', id: 'contact' }
  ];

  const renderNavItem = (item: typeof navItems[0]) => {
    const isPageLink = item.href.startsWith('/blog');
    return (
      <Link
        to={item.href}
        className={`relative px-3 sm:px-4 py-2 font-medium transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500
          ${activeSection === item.id ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
        aria-current={activeSection === item.id ? 'page' : undefined}
        onClick={(e) => {
          if (!isPageLink && location.pathname === '/') handleAnchorClick(e, `#${item.id}`);
          if (isMenuOpen) toggleMenu();
        }}
      >
        <span className="relative z-10">{item.label}</span>
        <span
          className={`absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300
            ${activeSection === item.id ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-100'}`}
        ></span>
      </Link>
    );
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+919019229243" className="hover:text-red-200 transition-colors">
                +91 9019229243
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:srsewingworld@gmail.com" className="hover:text-red-200 transition-colors">
                srsewingworld@gmail.com
              </a>
            </div>
          </div>
          <div className="text-xs">
            <span className="bg-white/20 px-3 py-1 rounded-full">
              ✨ 25+ Years of Excellence • Free Consultation
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-lg ${
          isScrolled
            ? 'bg-white/70 shadow-xl border-b border-gray-100'
            : 'bg-white/40 shadow-lg'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Section */}
            <div className="flex items-center flex-1 min-w-0">
              <Link to="/#home" className="flex-shrink-0 flex items-center group focus:outline-none" aria-label="Home" onClick={(e) => handleAnchorClick(e, '#home')}>
                <div className="relative">
                  <img
                    className="h-12 w-auto sm:h-16 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow"
                    src="/images/logo.jpg"
                    alt="SR Sewing World"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
                <div className="ml-2 sm:ml-3 truncate">
                  <span className="text-lg sm:text-xl lg:text-3xl font-bold bg-gradient-to-r from-red-600 to-gray-800 bg-clip-text text-transparent truncate block max-w-[100px] sm:max-w-[120px] lg:max-w-none">
                    S R Sewing World
                  </span>
                  <div className="hidden sm:block text-xs text-gray-500 font-medium">
                    Since 1998 • Premium Quality
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.href}>{renderNavItem(item)}</div>
              ))}
              {/* CTA Button */}
              <div className="ml-6">
                {/* Cart Icon */}
                <button
                  onClick={toggleCart}
                  className="relative p-2 mr-4 text-gray-700 hover:text-red-600 transition-colors rounded-full hover:bg-gray-100"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  )}
                </button>
                <Link
                  to="/#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Mobile CTA + Menu Button */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
              {/* Mobile Cart Icon */}
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-700 hover:text-red-600 transition-colors rounded-full hover:bg-gray-100 flex-shrink-0"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>
              <a
                href="tel:+919019229243"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex-shrink-0"
              >
                Call Now
              </a>
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-red-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 sm:h-7 sm:w-7" />
                ) : (
                  <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed top-0 left-0 w-full h-full bg-black/40 z-40"
              onClick={toggleMenu}
            ></div>
            
            {/* Menu Panel */}
            <div
              className="lg:hidden fixed top-0 right-0 w-full sm:w-80 h-full bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-2xl z-50"
              style={{ zIndex: 9999 }}
            >
              {/* Floating Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 z-10 p-4 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/50 hover:border-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
                <h2 className="text-lg font-semibold">Navigation Menu</h2>
                <button
                  onClick={toggleMenu}
                  className="p-3 text-white hover:text-red-200 hover:bg-white/20 rounded-lg transition-colors border border-white/30 hover:border-white/50"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* Navigation Items */}
              <div className="p-4 space-y-3 bg-white/80 backdrop-blur-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block w-full px-4 py-4 text-left font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 shadow-sm hover:shadow-md
                      ${activeSection === item.id 
                        ? 'text-white bg-gradient-to-r from-red-500 to-red-600 border-l-4 border-white shadow-lg' 
                        : 'text-gray-700 bg-white hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 border border-gray-200'
                      }`}
                    onClick={() => {
                      if (!item.href.startsWith('/blog') && location.pathname === '/') {
                        const el = document.querySelector(`#${item.id}`);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                      toggleMenu();
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Contact Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-2xl">
                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+919019229243"
                    className="flex items-center space-x-3 text-red-300 hover:text-white transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">+91 9019229243</span>
                  </a>
                  <a
                    href="mailto:srsewingworld@gmail.com"
                    className="flex items-center space-x-3 text-red-300 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="font-medium">srsewingworld@gmail.com</span>
                  </a>
                </div>
                <Link
                  to="/#contact"
                  className="block w-full text-center bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    toggleMenu();
                  }}
                >
                  Get Expert Consultation
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20 lg:h-24"></div>
    </>
  );
};

export default Navbar;