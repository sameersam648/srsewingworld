import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Plus, 
  Minus, 
  Share2, 
  Mail, 
  MessageSquare, 
  Info, 
  Wrench, 
  Users 
} from 'lucide-react';
import { productData, Product } from '../components/productData';
import SEO from '../components/SEO';
import Payment from '../components/Payment';
import FourOhFour from './404';
import AddToCartButton from '../components/AddToCartButton';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = productData.find((p: Product) => p.id.toString() === productId);
    setProduct(foundProduct || null);

    if (foundProduct) {
      if (foundProduct.features?.length) {
        setActiveTab('features');
      } else if (foundProduct.specifications?.length) {
        setActiveTab('specifications');
      } else if (foundProduct.accessories?.length) {
        setActiveTab('accessories');
      } else if (foundProduct.useCases?.length) {
        setActiveTab('usecases');
      }
    }
  }, [productId]);

  const handleBuyNow = () => {
    setIsPaymentOpen(true);
  };

  const handleClosePayment = () => {
    setIsPaymentOpen(false);
  };

  const handleWhatsApp = (product: Product) => {
    const message = `Hi, I'm interested in purchasing ${quantity} unit(s) of the ${product.name}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/919019229243?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = (product: Product) => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hi SR Sewing World,\n\nI'm interested in the ${product.name} (ID: ${product.id}) and would like to know more about it. My inquiry is regarding ${quantity} unit(s).\n\nLink: ${window.location.href}\n\nThank you`;
    const mailtoUrl = `mailto:srsewingworld@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const handleShare = async (product: Product) => {
    const shareData = {
      title: product.name,
      text: `Check out the ${product.name} at SR Sewing World!`,
      url: window.location.href,
    };
    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handlePaymentSuccess = (orderDetails: any) => {
    console.log('Payment successful:', orderDetails);
    setIsPaymentOpen(false);
  };

  const handlePaymentFailure = (error: any) => {
    console.error('Payment failed:', error);
    setIsPaymentOpen(false);
  };

  if (!product) {
    return <FourOhFour />;
  }

  const recommendedProducts = productData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <SEO
        title={`${product.name} - SR Sewing World`}
        description={product.description}
        product={{
            name: product.name,
            price: product.salePrice,
            description: product.description,
            image: product.image
        }}
      />
      
      {/* Mobile-Optimized Product Section */}
      <section className="relative py-4 sm:py-8 lg:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button - Mobile Optimized */}
            <div className="mb-4 sm:mb-8">
              <Link 
                to="/#products" 
                className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-colors text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Back to all products
              </Link>
            </div>

            {/* Mobile-First Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-start">
              {/* Image Gallery - Mobile Optimized */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-lg border border-gray-200/80 order-1 lg:order-1"
              >
                {product.images && product.images.length > 1 ? (
                  <ImageGallery images={product.images} name={product.name} />
                ) : (
                  <img 
                    src={product.image} 
                    alt={`${product.name} - ${product.category}`} 
                    className="w-full h-auto object-contain rounded-lg drop-shadow-2xl"
                  />
                )}
              </motion.div>

              {/* Product Details - Mobile Optimized */}
              <div className="flex flex-col h-full order-2 lg:order-2 space-y-4 sm:space-y-6">
                {/* Product Title */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>
                
                {/* Product Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Price Section - Mobile Optimized */}
                <div className="flex items-baseline gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600">
                    ₹{product.salePrice.toLocaleString()}
                  </span>
                  {product.price > product.salePrice && (
                    <>
                      <span className="text-base sm:text-lg lg:text-xl text-gray-500 line-through">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-xs sm:text-sm lg:text-base font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 px-2 sm:px-3 py-1 rounded-full shadow-md">
                        {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>

                {/* Warranty Section - Mobile Optimized */}
                {product.warranty && product.warranty.length > 0 && (
                  <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-200 bg-blue-50 shadow-inner">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Warranty</h2>
                    <ul className="space-y-2 sm:space-y-3">
                      {product.warranty.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 sm:space-x-3">
                          <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quantity Section - Mobile Optimized */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Quantity</h2>
                  <div className="flex items-center gap-1 sm:gap-2 rounded-lg border border-gray-300 p-1">
                    <button 
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 sm:p-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors touch-manipulation"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                    <span className="font-bold text-lg sm:text-xl text-gray-800 w-8 sm:w-10 text-center">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 sm:p-3 rounded-md text-gray-600 hover:bg-gray-100 transition-colors touch-manipulation"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                </div>

                {/* Share Section - Mobile Optimized */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Connect & Share</h2>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <button 
                      onClick={() => handleWhatsApp(product)} 
                      className="flex items-center justify-center p-2 sm:p-3 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-all touch-manipulation"
                      aria-label="Share on WhatsApp"
                      title="Share on WhatsApp"
                    >
                      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleEmail(product)} 
                      className="flex items-center justify-center p-2 sm:p-3 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-all touch-manipulation"
                      aria-label="Share via Email"
                      title="Share via Email"
                    >
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    <button 
                      onClick={() => handleShare(product)} 
                      className="flex items-center justify-center p-2 sm:p-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all touch-manipulation"
                      aria-label="Share product"
                      title="Share product"
                    >
                      <Share2 className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons - Mobile Optimized */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1">
                    <AddToCartButton product={product} quantity={quantity} variant="full" />
                  </div>
                  <motion.button
                    onClick={handleBuyNow}
                    className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white font-semibold hover:from-[#ff4b2b] hover:to-[#ff416c] transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation text-sm sm:text-base"
                    title="Buy Now"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Buy Now
                  </motion.button>
                  <motion.button
                    onClick={() => handleWhatsApp(product)}
                    className="p-3 sm:p-4 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors touch-manipulation"
                    title="Contact on WhatsApp"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Product Information Tabs - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-100/60">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Mobile-Optimized Tab Navigation */}
          <div className="mb-6 sm:mb-8 border-b border-gray-300 overflow-x-auto">
            <nav className="-mb-px flex space-x-4 sm:space-x-6 min-w-max" aria-label="Tabs">
              {product.features && product.features.length > 0 && <TabButton name="Features" icon={<Info />} activeTab={activeTab} setActiveTab={setActiveTab} />}
              {product.specifications && product.specifications.length > 0 && <TabButton name="Specifications" icon={<Wrench />} activeTab={activeTab} setActiveTab={setActiveTab} />}
              {product.accessories && product.accessories.length > 0 && <TabButton name="Accessories" icon={<Plus />} activeTab={activeTab} setActiveTab={setActiveTab} />}
              {product.useCases && product.useCases.length > 0 && <TabButton name="Use Cases" icon={<Users />} activeTab={activeTab} setActiveTab={setActiveTab} />}
            </nav>
          </div>
          
          {/* Tab Content with Mobile Optimization */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="min-h-[200px] sm:min-h-[300px]"
            >
              {activeTab === 'features' && <TabContent title="Features" data={product.features} />}
              {activeTab === 'specifications' && <TabContent title="Specifications" data={product.specifications} />}
              {activeTab === 'accessories' && <TabContent title="What's in the Box" data={product.accessories} />}
              {activeTab === 'usecases' && <TabContent title="Ideal For" data={product.useCases} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Recommended Products - Mobile Optimized */}
      {recommendedProducts.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-10">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {recommendedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Payment
        isOpen={isPaymentOpen}
        product={product}
        quantity={quantity}
        onClose={handleClosePayment}
        onSuccess={handlePaymentSuccess}
        onFailure={handlePaymentFailure}
      />
    </>
  );
};

// Mobile-Optimized Image Gallery
const ImageGallery: React.FC<{ images: string[]; name: string }> = ({ images, name }) => {
  const [page, setPage] = useState(0);

  const paginate = (newDirection: number) => {
    setPage(prev => (prev + newDirection + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg mb-3 sm:mb-4">
        <AnimatePresence>
          <motion.img
            key={page}
            src={images[page]}
            alt={`${name} - view ${page + 1}`}
            className="w-full h-full absolute object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.2 } }}
          />
        </AnimatePresence>
      </div>
      
      {/* Mobile-Optimized Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-700 hover:bg-white transition-all z-10 touch-manipulation"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-700 hover:bg-white transition-all z-10 touch-manipulation"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Mobile-Optimized Thumbnails */}
      <div className="flex gap-2 justify-center mt-3 sm:mt-4 overflow-x-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 transition-all touch-manipulation ${
              page === idx ? 'border-red-500' : 'border-transparent'
            }`}
          >
            <img src={img} alt={`${name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

// Mobile-Optimized Tab Button
const TabButton: React.FC<{ name: string; icon: React.ReactNode; activeTab: string; setActiveTab: (name: string) => void }> = ({ name, icon, activeTab, setActiveTab }) => {
  const tabId = name.toLowerCase().replace(/\s+/g, '');
  
  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`${
        activeTab === tabId
          ? 'border-red-500 text-red-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      } flex items-center whitespace-nowrap py-3 sm:py-4 px-2 sm:px-3 border-b-2 font-medium text-sm sm:text-base lg:text-lg transition-colors touch-manipulation`}
    >
      {icon}
      <span className="ml-1 sm:ml-2">{name}</span>
    </button>
  );
};

// Mobile-Optimized Tab Content
const TabContent: React.FC<{ title: string, data: string[] | undefined }> = ({ title, data }) => {
  if (!data || data.length === 0) {
    return (
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-500 italic">No information available.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">{title}</h2>
      <div className="space-y-3 sm:space-y-4">
        {data.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow touch-manipulation"
          >
            <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Mobile-Optimized Product Card
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Link 
    to={`/products/${product.id}`} 
    className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group touch-manipulation"
  >
    <div className="overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
      />
    </div>
    <div className="p-3 sm:p-4">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.category}</p>
      <div className="flex items-center justify-between mt-3 sm:mt-4">
        <span className="text-lg sm:text-xl font-bold text-green-600">₹{product.salePrice.toLocaleString()}</span>
        {product.price > product.salePrice && (
          <span className="text-xs sm:text-sm text-gray-500 line-through">₹{product.price.toLocaleString()}</span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductDetailPage;
