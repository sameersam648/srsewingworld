import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { productData, Product } from './productData'; 
import SEO from './SEO';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Read search term from URL hash
  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/products\?search=([^&]+)/i);
    if (match && match[1]) {
      setSearchTerm(decodeURIComponent(match[1]));
      // Optionally scroll to products section
      const el = document.getElementById('products');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      setSearchTerm('');
    }
    // Listen for hash changes
    const onHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/products\?search=([^&]+)/i);
      if (match && match[1]) {
        setSearchTerm(decodeURIComponent(match[1]));
      } else {
        setSearchTerm('');
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleWhatsApp = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); 
    e.stopPropagation();
    const message = `Hi, I'm interested in the ${product.name}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/919019229243?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  let filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      (product.features && product.features.some(f => f.toLowerCase().includes(term)))
    );
  }

  return (
    <section id="products" className="relative py-16 bg-gradient-to-br from-[#fff6f6] via-[#f9f6ff] to-[#f6faff] overflow-hidden">
      {/* New Decorative background */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <SEO 
        title="Sewing Machines in Bangalore - SR Sewing World"
        description="Explore our wide range of industrial and domestic sewing machines in Bangalore. We offer premium brands like Usha, Brother, and more. Visit our showroom for expert guidance and the best prices."
        keywords="sewing machines Bangalore, industrial sewing machines, domestic sewing machines, Usha sewing machines, Brother sewing machines, best sewing machine shop, sewing machine showroom"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-gray-900 mb-4 drop-shadow-lg"
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our wide range of high-quality sewing machines and accessories
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0"
        >
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff416c] shadow-sm text-sm sm:text-base
              ${selectedCategory === 'All'
                ? 'bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white shadow-lg'
                : 'bg-white/80 text-gray-700 hover:bg-[#ff416c]/10 hover:text-[#ff416c] border border-[#ff416c]/10'}
            `}
          >
            All Products
          </button>
          {['Industrial Machines', 'Other Sewing Machines', 'Domestic Sewing Machines', 'Industrial Sewing Machines (Usha)', 'Spares'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff416c] shadow-sm text-sm sm:text-base
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-[#ff416c]/10 hover:text-[#ff416c] border border-[#ff416c]/10'}
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group border border-[#ff416c]/10 hover:border-[#ff416c]/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
                  {product.price > product.salePrice && (
                    <div className="absolute top-2 right-2 z-10">
                      <span className="text-xs font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 px-2.5 py-1.5 rounded-full shadow-lg">
                        {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                      </span>
                    </div>
                  )}
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '';
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  {product.features && product.features.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 text-xs font-semibold shadow-sm border border-pink-200 max-w-[140px] truncate"
                          title={feature}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-lg sm:text-xl font-bold text-green-600">
                      ₹{product.salePrice.toLocaleString()}
                    </span>
                    {product.price > product.salePrice && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through">
                        ₹{product.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="flex-1" />
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 pt-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white px-3 sm:px-4 py-2 rounded-lg font-semibold shadow-lg text-center flex-1 text-sm sm:text-base"
                    >
                      View Details
                    </motion.div>
                    <motion.button
                      onClick={(e) => handleWhatsApp(e, product)}
                      className="flex items-center justify-center bg-green-600 text-white p-2 sm:p-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
                      title="Contact on WhatsApp"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;