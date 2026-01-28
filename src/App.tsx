import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RAGChatBot from './components/RAGChatBot';
import { CartProvider } from './contexts/CartContext';
import Cart from './components/Cart';
import { trackPageView } from './utils/analyticsConfig';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));
const BlogListPage = React.lazy(() => import('./pages/BlogListPage'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'));
const SewingMachinesBangalore = React.lazy(() => import('./pages/SewingMachinesBangalore'));
const NotFoundPage = React.lazy(() => import('./pages/404'));

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-500"></div>
  </div>
);

const App: React.FC = () => {
  const location = useLocation();

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);
  return (
    <HelmetProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:productId" element={<ProductDetailPage />} />
                <Route path="/blog" element={<BlogListPage />} />
                <Route path="/blog/:postId" element={<BlogPostPage />} />
                <Route path="/sewing-machines-bangalore" element={<SewingMachinesBangalore />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <RAGChatBot />
          <Cart />
        </div>
      </CartProvider>
    </HelmetProvider>
  );
};

export default App;