import React from 'react';

const Brands: React.FC = () => {
  const brands = [
    { name: 'Juki', logo: 'JUKI' },
    { name: 'Brother', logo: 'BROTHER' },
    { name: 'Singer', logo: 'SINGER' },
    { name: 'Usha', logo: 'USHA' },
    { name: 'Jack', logo: 'JACK' },
    { name: 'Zoje', logo: 'ZOJE' },
    { name: 'Typical', logo: 'TYPICAL' },
    { name: 'Gemsy', logo: 'GEMSY' }
  ];

  return (
    <section id="brands" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Trusted Brands</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
            We Partner with Industry Leaders
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality means working exclusively with the most trusted and 
            reliable sewing machine manufacturers in the world.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
                  {brand.logo}
                </div>
                <div className="text-sm text-gray-500 mt-2">{brand.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">15+</div>
            <div className="text-gray-600">Trusted Brand Partners</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600">Machine Models Available</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">100%</div>
            <div className="text-gray-600">Authentic Products</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;