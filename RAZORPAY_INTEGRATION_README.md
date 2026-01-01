# Razorpay Payment Gateway Integration

This document provides a comprehensive guide for the Razorpay payment gateway integration in the SR Sewing World website.

## 🚀 Features

- **Secure Payment Processing**: Integrated with Razorpay's hosted checkout
- **Cart Integration**: Seamless checkout from shopping cart
- **Buy Now Functionality**: Direct purchase for individual products
- **Order Management**: Complete order history and tracking
- **Customer Details**: Automatic saving and retrieval of customer information
- **Payment Analytics**: Order statistics and payment insights
- **Error Handling**: Comprehensive error handling and user feedback
- **Mobile Responsive**: Optimized for all device sizes

## 📁 File Structure

```
src/
├── utils/
│   ├── razorpayConfig.ts      # Configuration, types, and utilities
│   └── razorpayService.ts     # Core payment service logic
├── components/
│   ├── Payment.tsx            # Payment modal with customer form
│   ├── BuyNowButton.tsx       # Direct purchase button
│   ├── OrderHistory.tsx       # Order history and analytics
│   └── Cart.tsx               # Updated cart with payment integration
└── contexts/
    └── CartContext.tsx        # Cart state management
```

## 🔧 Setup Instructions

### 1. Get Razorpay Keys

1. Sign up for a Razorpay account at [razorpay.com](https://razorpay.com)
2. Navigate to Settings → API Keys
3. Generate API keys for both test and live environments

### 2. Configure API Keys

Update the configuration in `src/utils/razorpayConfig.ts`:

```typescript
export const RAZORPAY_CONFIG = {
  // Test Keys (for development)
  TEST_KEY_ID: 'rzp_test_YOUR_ACTUAL_TEST_KEY_ID',
  TEST_KEY_SECRET: 'YOUR_ACTUAL_TEST_KEY_SECRET',
  
  // Live Keys (for production)
  LIVE_KEY_ID: 'rzp_live_YOUR_ACTUAL_LIVE_KEY_ID',
  LIVE_KEY_SECRET: 'YOUR_ACTUAL_LIVE_KEY_SECRET',
  
  // Environment
  ENVIRONMENT: 'test', // Change to 'live' for production
  
  // ... other configuration
};
```

### 3. Environment Variables (Optional)

For better security, you can use environment variables:

```bash
# .env.local
VITE_RAZORPAY_TEST_KEY_ID=rzp_test_your_key
VITE_RAZORPAY_TEST_KEY_SECRET=your_secret
VITE_RAZORPAY_LIVE_KEY_ID=rzp_live_your_key
VITE_RAZORPAY_LIVE_KEY_SECRET=your_secret
```

Then update the config:

```typescript
TEST_KEY_ID: import.meta.env.VITE_RAZORPAY_TEST_KEY_ID || 'rzp_test_YOUR_TEST_KEY_ID',
TEST_KEY_SECRET: import.meta.env.VITE_RAZORPAY_TEST_KEY_SECRET || 'YOUR_TEST_KEY_SECRET',
LIVE_KEY_ID: import.meta.env.VITE_RAZORPAY_LIVE_KEY_ID || 'rzp_live_YOUR_LIVE_KEY_ID',
LIVE_KEY_SECRET: import.meta.env.VITE_RAZORPAY_LIVE_KEY_SECRET || 'YOUR_LIVE_KEY_SECRET',
```

## 💳 Usage Examples

### 1. Cart Checkout

The cart component automatically integrates with Razorpay:

```tsx
import Cart from './components/Cart';

// The cart will show a "Proceed to Checkout" button
// that opens the payment modal when clicked
```

### 2. Buy Now Button

Add direct purchase functionality to product cards:

```tsx
import BuyNowButton from './components/BuyNowButton';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      
      <BuyNowButton 
        product={product}
        onSuccess={(orderDetails) => {
          console.log('Purchase successful:', orderDetails);
        }}
        onFailure={(error) => {
          console.error('Purchase failed:', error);
        }}
      />
    </div>
  );
};
```

### 3. Order History

Display order history and analytics:

```tsx
import OrderHistory from './components/OrderHistory';

const AccountPage = () => {
  return (
    <div>
      <h1>My Orders</h1>
      <OrderHistory />
    </div>
  );
};
```

### 4. Custom Payment Integration

For custom payment flows:

```tsx
import { razorpayService } from './utils/razorpayService';

const handleCustomPayment = async () => {
  try {
    await razorpayService.processCartItems(
      cartItems,
      customerDetails,
      // Success callback
      (response, orderDetails) => {
        console.log('Payment successful:', orderDetails);
      },
      // Failure callback
      (error) => {
        console.error('Payment failed:', error);
      },
      // Cancel callback
      () => {
        console.log('Payment cancelled');
      }
    );
  } catch (error) {
    console.error('Payment error:', error);
  }
};
```

## 🔒 Security Considerations

### 1. Server-Side Verification

**Important**: Always verify payments on your server-side. The current implementation includes a placeholder for signature verification:

```typescript
// In razorpayConfig.ts
export const validatePaymentSignature = (
  orderId: string,
  paymentId: string,
  signature: string,
  secret: string
): boolean => {
  // TODO: Implement server-side verification
  // This should be done on your backend for security
  return true;
};
```

### 2. Production Security Checklist

- [ ] Move API keys to environment variables
- [ ] Implement server-side payment verification
- [ ] Use HTTPS in production
- [ ] Validate all payment data on server
- [ ] Implement proper error logging
- [ ] Set up webhook endpoints for payment status updates

### 3. Webhook Integration (Recommended)

Set up webhooks for real-time payment status updates:

```typescript
// Example webhook endpoint (server-side)
app.post('/webhook/razorpay', (req, res) => {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers['x-razorpay-signature'];
  
  // Verify webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(JSON.stringify(req.body))
    .digest('hex');
    
  if (signature === expectedSignature) {
    // Process webhook event
    const event = req.body;
    
    switch (event.event) {
      case 'payment.captured':
        // Update order status
        break;
      case 'payment.failed':
        // Handle failed payment
        break;
    }
  }
  
  res.status(200).send('OK');
});
```

## 🚀 Production Deployment

### 1. Environment Setup

1. **Update Environment**: Change `ENVIRONMENT` to `'live'` in `razorpayConfig.ts`
2. **API Keys**: Replace test keys with live keys
3. **Domain Whitelist**: Add your production domain to Razorpay dashboard
4. **Webhook URLs**: Configure webhook endpoints in Razorpay dashboard

### 2. Build and Deploy

```bash
# Build for production
npm run build

# Deploy to your hosting platform
# (Vercel, Netlify, AWS, etc.)
```

### 3. Post-Deployment Checklist

- [ ] Test payment flow with live keys
- [ ] Verify webhook endpoints are working
- [ ] Check order history functionality
- [ ] Test error handling scenarios
- [ ] Monitor payment logs
- [ ] Set up analytics tracking

## 🧪 Testing

### 1. Test Cards

Use these test cards for development:

| Card Type | Number | Expiry | CVV |
|-----------|--------|--------|-----|
| Success | 4111 1111 1111 1111 | Any future date | Any 3 digits |
| Failure | 4000 0000 0000 0002 | Any future date | Any 3 digits |

### 2. Test UPI

Use any UPI ID with amount less than ₹1 for testing.

### 3. Test Net Banking

Use any bank with amount less than ₹1 for testing.

## 📊 Analytics and Monitoring

### 1. Payment Events

The integration logs all payment events for debugging:

```typescript
// Events logged automatically:
// - Payment initiated
// - Payment successful
// - Payment failed
// - Payment cancelled
// - Order created
// - Customer details saved
```

### 2. Order Statistics

Access payment analytics:

```typescript
import { razorpayService } from './utils/razorpayService';

const stats = razorpayService.getPaymentStats();
console.log('Total orders:', stats.totalOrders);
console.log('Total amount:', stats.totalAmount);
console.log('Average order:', stats.averageOrderValue);
```

## 🔧 Customization

### 1. Styling

Customize the payment modal appearance:

```typescript
// In razorpayConfig.ts
export const RAZORPAY_CONFIG = {
  // ... other config
  THEME_COLOR: '#your-brand-color',
  COMPANY_NAME: 'Your Company Name',
  COMPANY_DESCRIPTION: 'Your Company Description',
};
```

### 2. Payment Options

Configure available payment methods in Razorpay dashboard:

- Credit/Debit Cards
- UPI
- Net Banking
- Wallets
- EMI

### 3. Currency and Amount

The integration is configured for INR. To change currency:

```typescript
// In razorpayConfig.ts
CURRENCY: 'USD', // or other supported currency

// Update amount conversion if needed
export const convertToSmallestUnit = (amount: number): number => {
  // For USD: return Math.round(amount * 100); // cents
  // For INR: return Math.round(amount * 100); // paise
  return Math.round(amount * 100);
};
```

## 🐛 Troubleshooting

### Common Issues

1. **Payment Modal Not Opening**
   - Check if Razorpay script is loading
   - Verify API keys are correct
   - Check browser console for errors

2. **Payment Failing**
   - Verify test card details
   - Check amount is in correct format (paise)
   - Ensure order creation is successful

3. **Customer Details Not Saving**
   - Check localStorage permissions
   - Verify form validation
   - Check browser console for errors

### Debug Mode

Enable debug logging:

```typescript
// In razorpayConfig.ts
export const logPaymentEvent = (event: string, data?: any) => {
  // Always log in development
  if (import.meta.env.MODE === 'development') {
    console.log(`[Razorpay] ${event}:`, data);
  }
  
  // Add your analytics service here
  // analytics.track('payment_event', { event, data, timestamp: Date.now() });
};
```

## 📞 Support

For issues related to:

- **Razorpay Integration**: Check this documentation
- **Razorpay API**: Contact Razorpay support
- **Website Issues**: Check the main project documentation

## 🔄 Updates and Maintenance

### Regular Maintenance

1. **Monitor Payment Logs**: Check for failed payments and errors
2. **Update Dependencies**: Keep Razorpay SDK updated
3. **Review Security**: Regularly audit payment security
4. **Performance**: Monitor payment processing times

### Version Updates

When updating the integration:

1. Backup current implementation
2. Test thoroughly in development
3. Deploy to staging environment
4. Test with real payment scenarios
5. Deploy to production

---

**Note**: This integration is designed for client-side payment processing. For production use, implement server-side payment verification and webhook handling for enhanced security. 