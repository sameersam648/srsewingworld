import React from 'react';
import { Award, Users, Wrench, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every machine meets our rigorous quality standards before reaching you.'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Our experienced team provides personalized recommendations for your needs.'
    },
    {
      icon: Wrench,
      title: 'Complete Service',
      description: 'From installation to maintenance, we support you every step of the way.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority, backed by excellent after-sales service.'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide">About Us</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Building Trust Through Quality & Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 25 years, S R Sewing World has been the trusted name in professional sewing solutions. 
                We began as a small family business with a simple mission: to provide the highest quality 
                sewing machines and exceptional service to our community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve thousands of satisfied customers, from individual hobbyists 
                to large-scale industrial operations. Our commitment to excellence, combined with deep 
                industry expertise, makes us your ideal partner for all sewing needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/6444237/pexels-photo-6444237.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sewing workshop"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/6443543/pexels-photo-6443543.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Professional tailoring"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/6444264/pexels-photo-6444264.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sewing machine details"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/6443664/pexels-photo-6443664.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Quality craftsmanship"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;