/**
 * Google Merchant Feed Route
 * Generates product feed for Google Merchant Center
 */

import { generateProductFeed, MerchantProduct } from '../utils/merchantConfig';
import { products } from '../components/productData';

/**
 * Convert product data to merchant format
 */
const convertToMerchantProduct = (product: any): MerchantProduct => {
  return {
    id: product.id,
    title: product.name,
    description: product.description,
    link: `https://srsewingworld.in/products/${product.id}`,
    image_link: product.image,
    availability: product.stock > 0 ? 'in_stock' : 'out_of_stock',
    price: product.price.toString(),
    currency: 'INR',
    brand: product.brand,
    category: 'Sewing Machines',
    condition: 'new',
    gtin: product.gtin,
    mpn: product.mpn,
  };
};

/**
 * Generate merchant product feed
 * This can be called from your backend or as a route handler
 */
export const getMerchantFeed = (): string => {
  const merchantProducts = products.map(convertToMerchantProduct);
  return generateProductFeed(merchantProducts);
};

/**
 * If using Express.js, use this as a route handler
 * app.get('/merchant-feed.xml', (req, res) => {
 *   res.header('Content-Type', 'application/xml');
 *   res.send(getMerchantFeed());
 * });
 */
