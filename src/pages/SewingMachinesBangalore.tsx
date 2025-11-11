import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const SewingMachinesBangalore: React.FC = () => (
  <>
    <SEO
      title="Sewing Machines in Bangalore | Buy Industrial & Domestic Machines - SR Sewing World"
      description="Looking for sewing machines in Bangalore? SR Sewing World offers the best prices on industrial and domestic sewing machines, expert service, and top brands. Visit our showroom or shop online!"
      url="https://srsewingworld.in/sewing-machines-bangalore"
    />
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-[#f6faff] to-[#fff6f6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
          Sewing Machines in Bangalore
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Discover the best industrial and domestic sewing machines in Bangalore at SR Sewing World. We offer a wide range of machines from top brands, expert guidance, and unbeatable prices. Whether you are a professional tailor, a small business, or a home sewing enthusiast, we have the perfect machine for you!
        </p>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose SR Sewing World?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Wide selection of <strong>industrial and domestic sewing machines</strong></li>
            <li>Authorized dealer for top brands like Usha, Brother, Jack, and more</li>
            <li>Expert advice and personalized recommendations</li>
            <li>Competitive prices and exclusive offers</li>
            <li>Professional installation and hands-on training</li>
            <li>Comprehensive after-sales service and support</li>
            <li>Convenient location in Bangalore with easy access</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Best-Selling Machines</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><Link to="/products/1" className="text-blue-600 underline">Jack F5 Industrial Sewing Machine</Link> – High speed, energy-saving, perfect for commercial use</li>
            <li><Link to="/products/2" className="text-blue-600 underline">Usha Domestic Sewing Machine</Link> – Reliable and easy to use for home projects</li>
            <li><Link to="/products/3" className="text-blue-600 underline">Brother Computerized Machine</Link> – Advanced features for creative sewing</li>
          </ul>
          <p className="mt-4">See our full <Link to="/#products" className="text-blue-600 underline">product range</Link>.</p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visit Our Showroom</h2>
          <p className="text-gray-700 mb-2">Unit -02, 2nd Cross Road, Om shakti temple, Mangammanapalya, Bengaluru, Karnataka 560068</p>
          <p className="text-gray-700 mb-2">Call/WhatsApp: <a href="tel:+919019229243" className="text-blue-600 underline">+91 90192 29243</a></p>
          <p className="text-gray-700">Open: Monday to Saturday, 10:00 AM – 7:00 PM</p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900">Which sewing machine is best for home use in Bangalore?</h3>
              <p className="text-gray-700">For home use, we recommend the Usha or Brother domestic sewing machines. They are easy to use, reliable, and come with excellent after-sales support.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Do you provide installation and training?</h3>
              <p className="text-gray-700">Yes! We offer professional installation and hands-on training for all machines purchased from us.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Can I get my sewing machine serviced in Bangalore?</h3>
              <p className="text-gray-700">Absolutely. We provide expert repair and maintenance services for all brands and models.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Do you offer EMI or financing options?</h3>
              <p className="text-gray-700">Yes, we have flexible EMI and financing options available. Contact us for details.</p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="text-gray-800 italic">“Best sewing machine shop in Bangalore! The staff were knowledgeable and helped me choose the perfect machine for my boutique.”</p>
              <span className="block mt-2 text-gray-600 font-semibold">– Priya S.</span>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <p className="text-gray-800 italic">“Excellent after-sales service. They fixed my old machine quickly and at a reasonable price.”</p>
              <span className="block mt-2 text-gray-600 font-semibold">– Ramesh K.</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/#contact" className="inline-block bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">Contact Us</Link>
        </div>
      </div>
    </section>
  </>
);

export default SewingMachinesBangalore; 