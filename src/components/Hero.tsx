import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">Trusted by 1000+ customers</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner in{' '}
                <span className="text-teal-600">Sewing Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience excellence in sewing with our premium machines, expert services, and 
                unmatched customer support. From industrial to domestic needs, we've got you covered.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <span>Explore Our Products</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-teal-600 hover:text-teal-600 transition-all duration-300">
                Contact Us Today
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Machine Models</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6444267/pexels-photo-6444267.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional sewing machine in action"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Premium Quality</div>
                  <div className="text-gray-600 text-sm">Certified Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;