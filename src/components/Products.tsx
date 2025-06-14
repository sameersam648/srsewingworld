import React from 'react';
import { MessageCircle, Eye } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Industrial Straight Stitch Machine',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/6444267/pexels-photo-6444267.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High-speed industrial machine perfect for garment manufacturing and heavy-duty stitching.',
      features: ['High Speed Operation', 'Durable Build', 'Precision Stitching']
    },
    {
      id: 2,
      name: 'Domestic Sewing Machine',
      category: 'Domestic',
      image: 'https://images.pexels.com/photos/6444237/pexels-photo-6444237.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'User-friendly domestic machine ideal for home sewing projects and small businesses.',
      features: ['Easy Operation', 'Multiple Stitches', 'Compact Design']
    },
    {
      id: 3,
      name: 'Embroidery Machine',
      category: 'Embroidery',
      image: 'https://images.pexels.com/photos/6443543/pexels-photo-6443543.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced embroidery machine for creating intricate designs and patterns.',
      features: ['Digital Control', 'Pattern Memory', 'Multi-Color Threading']
    },
    {
      id: 4,
      name: 'Overlock Machine',
      category: 'Overlock',
      image: 'https://images.pexels.com/photos/6444264/pexels-photo-6444264.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional overlock machine for perfect edge finishing and seaming.',
      features: ['Edge Finishing', 'Multiple Threads', 'Adjustable Tension']
    },
    {
      id: 5,
      name: 'Zigzag Sewing Machine',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/6443664/pexels-photo-6443664.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Versatile zigzag machine for decorative stitching and buttonhole creation.',
      features: ['Zigzag Stitch', 'Buttonhole Function', 'Variable Width']
    },
    {
      id: 6,
      name: 'Heavy Duty Machine',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/6444270/pexels-photo-6444270.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Robust machine designed for leather, canvas, and other heavy materials.',
      features: ['Heavy Material', 'Strong Motor', 'Durable Components']
    }
  ];

  const categories = ['All', 'Industrial', 'Domestic', 'Embroidery', 'Overlock'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Our Products</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Premium Sewing Machines for Every Need
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality sewing machines from trusted brands, 
            designed to meet both professional and personal sewing requirements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button className="flex-1 bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>Enquire Now</span>
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-700 hover:border-teal-600 hover:text-teal-600 transition-colors">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;