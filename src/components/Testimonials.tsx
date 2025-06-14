import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Fashion Designer',
      content: 'S R Sewing World has been my go-to place for all sewing machine needs. Their expertise and after-sales service are exceptional. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Garment Manufacturer',
      content: 'The industrial machines from S R Sewing World have significantly improved our production efficiency. Great quality and reliable service.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Meera Patel',
      role: 'Home Sewing Enthusiast',
      content: 'I bought my first sewing machine from them 5 years ago, and it still works perfectly. Their training and support made learning so much easier.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'Amit Singh',
      role: 'Tailor Shop Owner',
      content: 'Excellent service and genuine products. The AMC service has kept our machines running smoothly for years. True professionals!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Customer Testimonials</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with S R Sewing World.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-8 w-8 text-teal-600 opacity-50" />
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="flex justify-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-900">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;