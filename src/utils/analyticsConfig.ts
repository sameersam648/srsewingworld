/**
 * Google Analytics Configuration and Tracking Utility
 */

// Initialize gtag if it exists in the window
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track page view
 * @param pagePath - The path of the page (e.g., '/products/123')
 * @param pageTitle - The title of the page (optional)
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (window.gtag) {
    window.gtag('config', 'YOUR_GA_ID', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

/**
 * Track custom events
 * @param eventName - Name of the event (e.g., 'add_to_cart', 'purchase')
 * @param eventData - Additional event data
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData || {});
  }
};

/**
 * Track product view
 * @param product - Product details
 */
export const trackProductView = (product: {
  id: string;
  name: string;
  price: number;
  category?: string;
}) => {
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          price: product.price,
          item_category: product.category || 'sewing-machine',
        },
      ],
    });
  }
};

/**
 * Track add to cart event
 * @param product - Product details
 * @param quantity - Quantity added to cart
 */
export const trackAddToCart = (
  product: {
    id: string;
    name: string;
    price: number;
    category?: string;
  },
  quantity: number = 1
) => {
  if (window.gtag) {
    window.gtag('event', 'add_to_cart', {
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          price: product.price,
          quantity: quantity,
          item_category: product.category || 'sewing-machine',
        },
      ],
    });
  }
};

/**
 * Track purchase event
 * @param transactionData - Purchase transaction details
 */
export const trackPurchase = (transactionData: {
  transaction_id: string;
  value: number;
  currency: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    category?: string;
  }>;
}) => {
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionData.transaction_id,
      value: transactionData.value,
      currency: transactionData.currency,
      items: transactionData.items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
        item_category: item.category || 'sewing-machine',
      })),
    });
  }
};

/**
 * Track form submission (e.g., contact form, newsletter signup)
 * @param formName - Name of the form
 * @param formData - Form data (optional)
 */
export const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      form_name: formName,
      ...formData,
    });
  }
};

/**
 * Set user properties (e.g., user_id, customer_id)
 * @param userId - Unique user identifier
 * @param customProperties - Additional user properties
 */
export const setUserProperties = (userId: string, customProperties?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('set', {
      user_id: userId,
      ...customProperties,
    });
  }
};

/**
 * Track phone call conversions
 * @param phone - Phone number called
 */
export const trackPhoneCall = (phone: string) => {
  if (window.gtag) {
    window.gtag('event', 'phone_call_clicktocall', {
      phone_number: phone,
    });
  }
};

/**
 * Track engagement metrics
 * @param engagementType - Type of engagement (e.g., 'blog_read', 'product_comparison')
 */
export const trackEngagement = (engagementType: string) => {
  if (window.gtag) {
    window.gtag('event', 'engagement', {
      engagement_type: engagementType,
    });
  }
};
