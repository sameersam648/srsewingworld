# Google Analytics & Google Merchant Setup Guide

## 📊 Google Analytics Integration

### ✅ What's Been Setup

1. **Google Analytics Script** - Added to `index.html`
   - Gtag script is loaded from Google's CDN
   - Data layer initialization configured

2. **Analytics Configuration** - Created `src/utils/analyticsConfig.ts`
   - Page view tracking
   - Event tracking functions
   - Product tracking (view, add to cart, purchase)
   - Form submission tracking
   - Phone call tracking
   - User property tracking

3. **App Integration** - Updated `src/App.tsx`
   - Automatic page view tracking on route changes
   - Real-time tracking as users navigate

### 🔧 Setup Instructions

#### Step 1: Get Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or create a new property
4. Set up your website property for `srsewingworld.in`
5. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)

#### Step 2: Replace Placeholder ID

Replace `YOUR_GA_ID` with your actual Measurement ID in TWO files:

**File 1: `index.html` (line 14)**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
</script>
```

**File 2: `src/utils/analyticsConfig.ts` (line 18)**
```typescript
gtag('config', 'YOUR_GA_ID', {
```

#### Step 3: (Optional) Track Custom Events

Use the tracking functions in your components:

```typescript
import { trackEvent, trackAddToCart, trackProductView } from '../utils/analyticsConfig';

// Track product view
trackProductView({
  id: '123',
  name: 'Singer Sewing Machine',
  price: 15000,
  category: 'Domestic'
});

// Track add to cart
trackAddToCart({
  id: '123',
  name: 'Singer Sewing Machine',
  price: 15000
}, 1);

// Track custom event
trackEvent('custom_event', { 
  custom_param: 'value' 
});
```

---

## 🛍️ Google Merchant Center Integration

### ✅ What's Been Setup

1. **Merchant Configuration** - Created `src/utils/merchantConfig.ts`
   - Product feed generator (XML format)
   - Google Shopping structured data
   - Merchant event tracking

2. **SEO Integration** - Updated `src/components/SEO.tsx`
   - Google Merchant verification meta tag
   - Enhanced product structured data for Google Shopping
   - Google Shopping compatibility

3. **Feed Route** - Created `server/routes/merchantFeed.ts`
   - Generates product feed from your product data
   - Converts to Merchant Center XML format

### 🔧 Setup Instructions

#### Step 1: Create Google Merchant Center Account

1. Go to [Google Merchant Center](https://merchants.google.com/)
2. Sign in with your Google account
3. Create a new merchant account
4. Add your website `srsewingworld.in`
5. Verify your website (you'll get a Merchant ID)

#### Step 2: Replace Merchant Verification ID

Replace `YOUR_MERCHANT_ID` in `src/components/SEO.tsx`:

```html
<meta name="google-site-verification" content="YOUR_MERCHANT_ID" />
```

#### Step 3: Submit Product Feed

You have two options:

**Option A: Automated Upload (Recommended)**
1. In Merchant Center, go to Products → Feeds
2. Click "Create Feed"
3. Set feed URL to: `https://srsewingworld.in/merchant-feed.xml`
4. Configure schedule for daily updates

**Option B: Manual Upload**
1. Generate feed by visiting: `https://srsewingworld.in/merchant-feed.xml`
2. Download the XML
3. Upload manually in Merchant Center

#### Step 4: Implement Server Endpoint (if using Node.js)

Add this to your Express server:

```typescript
import { getMerchantFeed } from './routes/merchantFeed';

app.get('/merchant-feed.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  res.send(getMerchantFeed());
});
```

#### Step 5: Update Product Data Structure

Ensure your `productData.ts` includes these fields:

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  brand: string;
  stock: number;
  gtin?: string;  // Global Trade Item Number (optional but recommended)
  mpn?: string;   // Manufacturer Part Number (optional but recommended)
}
```

---

## 📈 Verification

### Google Analytics Verification

1. Open your website: `https://srsewingworld.in`
2. Go to [Google Analytics](https://analytics.google.com/)
3. Check "Real-time" → "Overview"
4. You should see real-time visitors

### Google Merchant Center Verification

1. Submit sitemap.xml (already in your public folder)
2. In Merchant Center, go to Tools → Sitemap
3. Add: `https://srsewingworld.in/sitemap.xml`
4. Go to Products → Issues to check for any data issues
5. Fix any warnings/errors listed

---

## 🎯 Recommended Next Steps

### For Google Analytics:
- [ ] Set up conversion tracking for payments (Razorpay integration)
- [ ] Set up goals for form submissions
- [ ] Create audiences for remarketing
- [ ] Link with Google Search Console for better SEO data

### For Google Merchant:
- [ ] Ensure all product images are high quality
- [ ] Add accurate product categories
- [ ] Include product pricing and availability
- [ ] Monitor "Issues" tab for data quality problems
- [ ] Set up Google Shopping campaigns in Google Ads

---

## 🔐 Important Notes

- Keep your **Measurement ID** and **Merchant ID** secure
- Never commit credentials to version control
- Test both systems in staging before going live
- Monitor analytics data regularly for insights
- Update product feed automatically (recommended daily)
- Ensure product data accuracy (prices, stock, images)

---

## 📚 Resources

- [Google Analytics Documentation](https://support.google.com/analytics)
- [Google Merchant Center Help](https://support.google.com/merchantcenter)
- [Google Shopping Best Practices](https://support.google.com/merchants/answer/6324862)
- [Product Feed Specification](https://support.google.com/merchants/answer/7052112)

---

## 🐛 Troubleshooting

### Analytics not showing data?
- Verify GA ID is correct in both files
- Check browser console for errors
- Wait 24-48 hours for data to appear
- Ensure cookies are enabled in browser

### Product feed errors?
- Check XML format validity
- Ensure all required fields are present
- Verify product data structure
- Check merchant feed.xml endpoint is accessible

---

Created: January 28, 2026
Last Updated: January 28, 2026
