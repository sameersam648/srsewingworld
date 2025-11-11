// Razorpay Configuration and Types
export interface RazorpayOrderData {
  amount: number; // Amount in paise (e.g., 1000 = ₹10)
  currency: string;
  receipt: string;
  notes?: Record<string, string>;
}

export interface RazorpayPaymentData {
  order_id: string;
  payment_id: string;
  signature: string;
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface OrderDetails {
  id: string;
  amount: number;
  currency: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  customer: {
    name?: string;
    email?: string;
    phone?: string;
  };
  timestamp: number;
  status: 'pending' | 'completed' | 'failed';
}

// Razorpay Configuration
export const RAZORPAY_CONFIG = {
  // Test Keys (Keep for development/testing)
  TEST_KEY_ID: 'rzp_test_zCDtfxV4sT4A0v',
  TEST_KEY_SECRET: 'Im0hClcijnQBX9zAWLxxPpI1',
  
  // Live Keys (Use these for production)
  LIVE_KEY_ID: 'rzp_live_3xmQj2DECMuTLB',
  LIVE_KEY_SECRET: 'HWVNaQDOTOORDmmiJq8c15QQ',
  
  // Environment - Changed to LIVE for production
  ENVIRONMENT: 'live' as 'test' | 'live',
  
  // Company Details
  COMPANY_NAME: 'SR Sewing World',
  COMPANY_DESCRIPTION: 'Premium Sewing Machines & Services',
  
  // Theme
  THEME_COLOR: '#ff416c',
  
  // Currency
  CURRENCY: 'INR',
  
  // Order Settings
  ORDER_PREFIX: 'SRSEW',
  RECEIPT_PREFIX: 'RCPT',
};

// Get the appropriate key based on environment
export const getRazorpayKey = (): string => {
  if (RAZORPAY_CONFIG.ENVIRONMENT === 'live') {
    const liveKey = RAZORPAY_CONFIG.LIVE_KEY_ID;
    if (!liveKey || liveKey === 'rzp_live_YOUR_LIVE_KEY_ID') {
      console.warn('Live key not configured, falling back to test key');
      return RAZORPAY_CONFIG.TEST_KEY_ID;
    }
    return liveKey;
  }
  
  const testKey = RAZORPAY_CONFIG.TEST_KEY_ID;
  if (!testKey || testKey === 'rzp_test_YOUR_TEST_KEY_ID') {
    console.error('Test key not configured properly');
    throw new Error('Razorpay test key not configured. Please update your API keys.');
  }
  return testKey;
};

// Validate API keys
export const validateApiKeys = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (RAZORPAY_CONFIG.ENVIRONMENT === 'test') {
    if (!RAZORPAY_CONFIG.TEST_KEY_ID || RAZORPAY_CONFIG.TEST_KEY_ID === 'rzp_test_YOUR_TEST_KEY_ID') {
      errors.push('Test key not configured');
    }
    if (!RAZORPAY_CONFIG.TEST_KEY_SECRET || RAZORPAY_CONFIG.TEST_KEY_SECRET === 'YOUR_TEST_KEY_SECRET') {
      errors.push('Test secret not configured');
    }
  } else {
    if (!RAZORPAY_CONFIG.LIVE_KEY_ID || RAZORPAY_CONFIG.LIVE_KEY_ID === 'rzp_live_YOUR_LIVE_KEY_ID') {
      errors.push('Live key not configured');
    }
    if (!RAZORPAY_CONFIG.LIVE_KEY_SECRET || RAZORPAY_CONFIG.LIVE_KEY_SECRET === 'YOUR_LIVE_KEY_SECRET') {
      errors.push('Live secret not configured');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Generate unique order ID
export const generateOrderId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${RAZORPAY_CONFIG.ORDER_PREFIX}${timestamp}${random}`;
};

// Generate unique receipt ID
export const generateReceiptId = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${RAZORPAY_CONFIG.RECEIPT_PREFIX}${timestamp}${random}`;
};

// Convert amount to paise (Razorpay expects amount in paise)
export const convertToPaise = (amount: number): number => {
  return Math.round(amount * 100);
};

// Convert paise to rupees
export const convertFromPaise = (paise: number): number => {
  return paise / 100;
};

// Format amount for display
export const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Validate Razorpay response signature (for server-side verification)
export const validatePaymentSignature = (
  orderId: string,
  paymentId: string,
  signature: string,
  secret: string
): boolean => {
  // This should be implemented on the server-side for security
  // For now, we'll return true for demo purposes
  console.log('Payment signature validation should be done server-side');
  return true;
};

// Get customer details from localStorage or form
export const getCustomerDetails = () => {
  const storedDetails = localStorage.getItem('srsewingworld-customer');
  if (storedDetails) {
    try {
      return JSON.parse(storedDetails);
    } catch (error) {
      console.error('Error parsing stored customer details:', error);
    }
  }
  
  return {
    name: '',
    email: '',
    phone: '',
  };
};

// Save customer details to localStorage
export const saveCustomerDetails = (details: {
  name?: string;
  email?: string;
  phone?: string;
}) => {
  localStorage.setItem('srsewingworld-customer', JSON.stringify(details));
};

// Environment-specific configuration
export const getConfigForEnvironment = () => {
  // For production, always use live mode
  // For development, you can change this to 'test' if needed
  const isProduction = true; // Set to true for live payments
  
  return {
    ...RAZORPAY_CONFIG,
    ENVIRONMENT: isProduction ? 'live' : 'test',
    // Add any environment-specific overrides here
  };
};

// Payment status messages
export const PAYMENT_STATUS_MESSAGES = {
  pending: 'Payment is being processed...',
  completed: 'Payment completed successfully!',
  failed: 'Payment failed. Please try again.',
  cancelled: 'Payment was cancelled.',
  processing: 'Payment is being processed...',
};

// Error messages for different scenarios
export const PAYMENT_ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  INVALID_AMOUNT: 'Invalid payment amount.',
  ORDER_CREATION_FAILED: 'Failed to create order. Please try again.',
  PAYMENT_FAILED: 'Payment failed. Please try again.',
  CANCELLED: 'Payment was cancelled by the user.',
  TIMEOUT: 'Payment request timed out. Please try again.',
  GENERIC_ERROR: 'An error occurred during payment. Please try again.',
};

// Logging utility for payment events
export const logPaymentEvent = (event: string, data?: any) => {
  if (import.meta.env.MODE === 'development') {
    console.log(`[Razorpay] ${event}:`, data);
  }
  
  // In production, you might want to send this to your analytics service
  // analytics.track('payment_event', { event, data, timestamp: Date.now() });
}; 