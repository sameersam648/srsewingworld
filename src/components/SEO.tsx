import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  product?: {
    name: string;
    price: number;
    description: string;
    image: string;
  };
}

const SEO: React.FC<SEOProps> = ({
  title = "SR Sewing World - Premium Sewing Machines in Bangalore",
  description = "SR Sewing World is your trusted partner for premium sewing machines in Bangalore. We offer a wide range of industrial and domestic sewing machines, including Usha, Brother, and other top brands. Visit our showroom for expert guidance and the best prices.",
  keywords = "sewing machines, industrial sewing machines, domestic sewing machines, Usha sewing machines, Brother sewing machines, sewing machine showroom Bangalore, best sewing machine shop, sewing machine repair, sewing machine service, SR Sewing World",
  url = "https://srsewingworld.in",
  image,
  product
}) => {
  const defaultImage = "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&w=1200&q=80";
  const seoImage = image || product?.image || defaultImage;
  const seoUrl = url;

  const structuredData: any = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "SR Sewing World",
    "image": seoImage,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit -02, 2nd Cross Road, Om shakti temple, Mangammanapalya",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560068",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.905004",
      "longitude": "77.6355013"
    },
    "url": seoUrl,
    "telephone": "+919019229243",
    "priceRange": "₹₹",
    "openingHours": "Mo-Sa 10:00-19:00",
    "sameAs": [
      "https://www.facebook.com/srsewingworld",
      "https://www.instagram.com/srsewingworld"
    ]
  };

  if (product) {
    structuredData["@type"] = "Product";
    structuredData["name"] = product.name;
    structuredData["description"] = product.description;
    structuredData["image"] = product.image;
    structuredData["offers"] = {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "SR Sewing World"
      }
    };
    structuredData["url"] = seoUrl;
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={product ? "product" : "website"} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="SR Sewing World" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 