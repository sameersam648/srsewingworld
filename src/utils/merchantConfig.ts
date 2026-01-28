/**
 * Google Merchant Center Integration
 * Provides product feed and merchant-related functionality
 */

export interface MerchantProduct {
  id: string;
  title: string;
  description: string;
  link: string;
  image_link: string;
  availability: 'in_stock' | 'out_of_stock' | 'preorder';
  price: string;
  currency: string;
  brand: string;
  category: string;
  condition: 'new' | 'refurbished' | 'used';
  gtin?: string;
  mpn?: string;
  shipping?: {
    price: string;
    currency: string;
    country: string;
  };
}

/**
 * Generate Google Merchant product feed in XML format
 * @param products - Array of products
 * @returns XML string for Google Merchant feed
 */
export const generateProductFeed = (products: MerchantProduct[]): string => {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>SR Sewing World Products</title>
    <link>https://srsewingworld.in</link>
    <description>Premium Sewing Machines and Accessories</description>
    ${products
      .map(
        (product) => `
    <item>
      <g:id>${escapeXml(product.id)}</g:id>
      <title>${escapeXml(product.title)}</title>
      <description>${escapeXml(product.description)}</description>
      <link>${escapeXml(product.link)}</link>
      <g:image_link>${escapeXml(product.image_link)}</g:image_link>
      <g:availability>${product.availability}</g:availability>
      <g:price>${product.price} ${product.currency}</g:price>
      <g:brand>${escapeXml(product.brand)}</g:brand>
      <g:product_type>${escapeXml(product.category)}</g:product_type>
      <g:condition>${product.condition}</g:condition>
      ${product.gtin ? `<g:gtin>${escapeXml(product.gtin)}</g:gtin>` : ''}
      ${product.mpn ? `<g:mpn>${escapeXml(product.mpn)}</g:mpn>` : ''}
      ${
        product.shipping
          ? `<g:shipping>
        <g:price>${product.shipping.price} ${product.shipping.currency}</g:price>
        <g:country>${product.shipping.country}</g:country>
      </g:shipping>`
          : ''
      }
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return feed;
};

/**
 * Escape XML special characters
 */
const escapeXml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

/**
 * Get merchant center meta tags to add to page head
 * Returns merchant ID verification meta tag
 */
export const getMerchantMetaTags = (merchantId: string): string[] => {
  return [
    `<meta name="google-site-verification" content="${merchantId}" />`,
  ];
};

/**
 * Format product data for Google Shopping structured data
 */
export const getGoogleShoppingStructuredData = (product: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  availability: string;
  url: string;
  brand: string;
  sku: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      url: product.url,
      priceCurrency: product.currency,
      price: product.price.toString(),
      availability: `https://schema.org/${
        product.availability === 'in_stock' ? 'InStock' : 'OutOfStock'
      }`,
      seller: {
        '@type': 'Organization',
        name: 'SR Sewing World',
      },
    },
  };
};

/**
 * Track Google Merchant events (requires analytics setup)
 */
export const trackMerchantEvent = (
  eventType: 'product_view' | 'product_click' | 'add_to_cart' | 'purchase',
  productData: any
) => {
  if (window.gtag) {
    window.gtag('event', `merchant_${eventType}`, productData);
  }
};
