import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Brands from '../components/Brands';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <SEO
        title="Sewing Machines in Bangalore | SR Sewing World - Best Industrial & Domestic Machines"
        description="Buy sewing machines in Bangalore from SR Sewing World. We offer the best prices on industrial and domestic sewing machines, expert service, and top brands. Visit our showroom today!"
        url="https://srsewingworld.in/"
      />
      <Hero />
      <Products />
      <Brands />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
