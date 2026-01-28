# SR Sewing World - Project Architecture & Structure

**Project Name:** SR Sewing World  
**Type:** E-commerce Website  
**Tech Stack:** React 18 + TypeScript + Vite  
**Framework:** Tailwind CSS + Framer Motion  
**Hosting:** Deployed on Vercel/Similar  
**Last Updated:** January 28, 2026

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Core Components](#core-components)
5. [Pages](#pages)
6. [Utilities & Services](#utilities--services)
7. [State Management](#state-management)
8. [Styling Approach](#styling-approach)
9. [Key Features](#key-features)
10. [Build & Deployment](#build--deployment)

---

## 🎯 Project Overview

**SR Sewing World** is a modern, responsive e-commerce platform specializing in sewing machines and related services. It features:

- **Product Catalog**: Display and filter sewing machines from various brands
- **Blog System**: Content management with blog posts and articles
- **AI-Powered Chatbot**: RAG (Retrieval Augmented Generation) based chatbot for customer support
- **E-commerce Functionality**: Shopping cart, product details, pricing
- **Service Management**: Booking appointments and scheduling services
- **Payment Integration**: Razorpay payment gateway
- **Analytics**: Google Analytics & Google Merchant Center integration
- **SEO Optimized**: Meta tags, structured data, sitemaps

---

## 🛠 Technology Stack

### Frontend Framework
- **React**: 18.3.1 - UI library
- **TypeScript**: 5.5.3 - Type-safe JavaScript
- **Vite**: 5.4.2 - Build tool & dev server

### UI Libraries & Styling
- **Tailwind CSS**: 3.4.1 - Utility-first CSS framework
- **Framer Motion**: 12.18.1 - Animation library
- **Lucide React**: 0.344.0 - Icon library
- **React Helmet Async**: 2.0.5 - SEO meta tags management

### Routing & Navigation
- **React Router DOM**: 7.6.2 - Client-side routing

### Utilities
- **Concurrently**: 9.2.0 - Run multiple commands simultaneously
- **PostCSS**: 8.4.35 - CSS processor
- **Autoprefixer**: 10.4.18 - CSS vendor prefixes
- **Terser**: 5.28.1 - JavaScript minification

---

## 📂 Directory Structure

```
srsewingworld/
├── src/
│   ├── components/           # Reusable UI components
│   ├── pages/               # Page-level components
│   ├── contexts/            # React Context for state
│   ├── utils/               # Utility functions & configs
│   ├── hooks/               # Custom React hooks
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite type definitions
│
├── public/                  # Static assets
│   ├── images/             # Product and brand images
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO robots directive
│   ├── sitemap.xml         # XML sitemap
│   └── sw.js               # Service worker
│
├── server/
│   └── routes/             # Backend routes (merchant feed)
│
├── Configuration Files
│   ├── vite.config.ts      # Vite build configuration
│   ├── tsconfig.json       # TypeScript config
│   ├── tailwind.config.js  # Tailwind configuration
│   ├── postcss.config.js   # PostCSS configuration
│   ├── eslint.config.js    # ESLint configuration
│   └── package.json        # Dependencies & scripts
│
├── Documentation
│   ├── README.md           # Project readme
│   ├── RAG_SYSTEM_README.md # RAG chatbot documentation
│   ├── RAZORPAY_INTEGRATION_README.md
│   ├── GOOGLE_ANALYTICS_MERCHANT_SETUP.md
│   ├── CNAME              # Domain configuration
│   └── ARCHITECTURE.md     # This file
```

---

## 🧩 Core Components

### Layout Components

#### **Navbar** (`src/components/Navbar.tsx`)
- Navigation menu with links to pages
- Cart icon with item count
- Mobile-responsive hamburger menu
- Smooth scroll navigation

#### **Header** (`src/components/Header.tsx`)
- Page header with search functionality
- Brand logo and branding
- Navigation integration

#### **Footer** (`src/components/Footer.tsx`)
- Contact information
- Social media links
- Quick links
- Copyright information
- Google Maps integration

### Section Components

#### **Hero** (`src/components/Hero.tsx`)
- Landing page hero section
- Featured products showcase
- Call-to-action buttons
- Animated background effects

#### **Products** (`src/components/Products.tsx`)
- Product grid layout
- Product cards with images and pricing
- Add to cart functionality
- Product filtering

#### **Brands** (`src/components/Brands.tsx`)
- Trusted brand partners showcase
- Animated number counters (15+, 500+, 100%)
- Brand statistics section

#### **Services** (`src/components/Services.tsx`)
- Service offerings display (Repair, AMC, Training, Support)
- Service schedule modal integration
- Call-to-action section

#### **About** (`src/components/About.tsx`)
- Company information
- Vision and mission
- Team introduction
- Company values

#### **Testimonials** (`src/components/Testimonials.tsx`)
- Customer reviews and ratings
- Star ratings
- Customer names and feedback

#### **Contact** (`src/components/Contact.tsx`)
- Contact form
- Business hours
- Location map
- Contact information

### Feature Components

#### **Cart** (`src/components/Cart.tsx`)
- Shopping cart sidebar
- Item quantity management
- Price calculation
- Cart summary

#### **CartIcon** (`src/components/CartIcon.tsx`)
- Cart badge with item count
- Click to open cart

#### **Payment** (`src/components/Payment.tsx`)
- Razorpay payment integration
- Order summary
- Payment gateway integration

#### **ChatBot** (`src/components/ChatBot.tsx`)
- AI-powered customer support
- Message interface
- FAQs integration

#### **RAGChatBot** (`src/components/RAGChatBot.tsx`)
- RAG-based intelligent chatbot
- Knowledge base powered responses
- Product information retrieval

#### **ServiceScheduleModal** (`src/components/ServiceScheduleModal.tsx`)
- Modal for scheduling services
- Form with validation
- WhatsApp integration
- Customer information collection

### Utility Components

#### **SEO** (`src/components/SEO.tsx`)
- Meta tag management
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Google Merchant integration

#### **OptimizedImage** (`src/components/OptimizedImage.tsx`)
- Lazy-loaded images
- Responsive image rendering
- Image optimization

#### **AddToCartButton** & **BuyNowButton**
- Quick action buttons
- Shopping functionality
- Toast notifications

#### **AnimatedNumber** (`src/components/AnimatedNumber.tsx`)
- Animated counter component
- Counts numbers with easing animation
- Intersection Observer for viewport detection

#### **OrderHistory** (`src/components/OrderHistory.tsx`)
- User order history display
- Order tracking
- Receipt management

---

## 📄 Pages

### **HomePage** (`src/pages/HomePage.tsx`)
- Main landing page
- Combines Hero, Products, Services, Testimonials, Contact
- Featured products section
- Call-to-action sections

### **ProductDetailPage** (`src/pages/ProductDetailPage.tsx`)
- Individual product detail view
- Product specifications
- Customer reviews
- Add to cart functionality
- Related products

### **BlogListPage** (`src/pages/BlogListPage.tsx`)
- Blog posts listing
- Search and filter functionality
- Pagination
- Category filtering

### **BlogPostPage** (`src/pages/BlogPostPage.tsx`)
- Individual blog post view
- Full article content
- Related blog posts
- Share functionality

### **SewingMachinesBangalore** (`src/pages/SewingMachinesBangalore.tsx`)
- Location-specific page
- Bangalore sewing machine offerings
- Local services
- Location information

### **404 Page** (`src/pages/404.tsx`)
- Error page for not found routes
- Navigation back to home

---

## 🔧 Utilities & Services

### **analyticsConfig.ts** (`src/utils/analyticsConfig.ts`)
- Google Analytics configuration
- Tracking functions:
  - `trackPageView()` - Page view tracking
  - `trackEvent()` - Custom event tracking
  - `trackProductView()` - Product view tracking
  - `trackAddToCart()` - Add to cart tracking
  - `trackPurchase()` - Purchase tracking
  - `trackFormSubmission()` - Form tracking
  - `setUserProperties()` - User identification
  - `trackPhoneCall()` - Phone call tracking

### **merchantConfig.ts** (`src/utils/merchantConfig.ts`)
- Google Merchant Center integration
- Product feed generation (XML format)
- Google Shopping structured data
- Merchant event tracking

### **ragEngine.ts** (`src/utils/ragEngine.ts`)
- RAG (Retrieval Augmented Generation) engine
- Semantic search implementation
- Knowledge base retrieval
- LLM integration for responses

### **ragConfig.ts** (`src/utils/ragConfig.ts`)
- RAG system configuration
- Model parameters
- Search settings

### **razorpayConfig.ts** (`src/utils/razorpayConfig.ts`)
- Razorpay payment gateway configuration
- Payment processing
- Order creation
- Transaction handling

### **razorpayService.ts** (`src/utils/razorpayService.ts`)
- Razorpay API service functions
- Payment verification
- Order management
- Transaction logging

### **knowledgeBase.ts** (`src/utils/knowledgeBase.ts`)
- Product information database
- FAQ data
- Service descriptions
- Product specifications
- Used by RAG chatbot for responses

---

## 📦 State Management

### **CartContext** (`src/contexts/CartContext.tsx`)
- Global cart state management
- Context API implementation
- Cart operations:
  - Add to cart
  - Remove from cart
  - Update quantity
  - Clear cart
  - Get cart total

### **App Component** (`src/App.tsx`)
- Root component
- Route definitions
- Provider setup (HelmetProvider, CartProvider)
- Analytics integration
- Page load tracking

---

## 🎨 Styling Approach

### **Tailwind CSS**
- Utility-first CSS framework
- Responsive design (mobile-first)
- Breakpoints: sm, md, lg, xl, 2xl
- Color scheme: Primary (#ff416c), Secondary (#ff4b2b), Grays

### **Custom CSS** (`src/index.css`)
- Global styles
- Custom animations
- CSS variables
- Typography settings

### **Framer Motion**
- Component animations
- Page transitions
- Scroll animations
- Hover effects

### **Responsive Design**
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+
- Landscape variations

---

## ✨ Key Features

### 1. **E-Commerce**
   - Product catalog with 500+ machines
   - Shopping cart functionality
   - Product filtering and search
   - Price display with discounts

### 2. **Payment Integration**
   - Razorpay payment gateway
   - Secure transactions
   - Order confirmation
   - Invoice generation

### 3. **AI Chatbot**
   - RAG-based intelligent responses
   - Knowledge base integration
   - 24/7 customer support
   - Multi-turn conversations

### 4. **Service Booking**
   - Service schedule modal
   - Form validation
   - WhatsApp integration
   - Customer information collection

### 5. **Analytics**
   - Google Analytics tracking
   - Page view tracking
   - Event tracking
   - Conversion tracking

### 6. **SEO**
   - Meta tags optimization
   - Structured data (JSON-LD)
   - Open Graph integration
   - XML sitemap
   - Google Merchant Center integration

### 7. **Blog System**
   - Rich content support
   - Blog post listing
   - Category filtering
   - Author information

### 8. **Responsive Design**
   - Mobile-first approach
   - Tablet optimization
   - Desktop experience
   - Fast loading times

---

## 🚀 Build & Deployment

### **Development Server**
```bash
npm run dev
```
- Runs on `http://localhost:5173`
- Hot module replacement (HMR)
- Fast refresh

### **Production Build**
```bash
npm run build
```
- Optimized bundle
- Code splitting (vendor, router, ui)
- Minification with Terser
- CSS optimization

### **Preview**
```bash
npm run preview
```
- Local preview of production build

### **Type Checking**
```bash
npm run type-check
```
- TypeScript validation
- Error detection

### **Linting**
```bash
npm run lint
```
- ESLint validation
- Code quality checks

### **Optimization Scripts**
```bash
npm run optimize-images
```
- Image compression
- Format optimization

### **Build Configuration** (`vite.config.ts`)
- Target: ES2015
- Minifier: Terser
- Code splitting strategy:
  - vendor: React dependencies
  - router: React Router
  - ui: Animation and icon libraries
- Chunk size warning: 1000KB

---

## 📊 Data Flow

```
User Interaction
       ↓
Components (React)
       ↓
State Management (Context API)
       ↓
Services/Utils
       ↓
External APIs (Razorpay, WhatsApp, Google Analytics)
       ↓
Response → Component Update
```

---

## 🔐 Configuration Files

### **vite.config.ts**
- Build optimization
- Dependency pre-bundling
- Server configuration
- Environment settings

### **tsconfig.json**
- TypeScript compilation options
- Module resolution
- ES target configuration

### **tailwind.config.js**
- Color palette
- Theme customization
- Plugin configuration

### **package.json**
- Project metadata
- Dependencies list
- Build scripts
- Development tools

---

## 🌐 API Integration

### **External Services**
1. **Razorpay** - Payment processing
2. **Google Analytics** - Web analytics
3. **Google Merchant Center** - Product listing
4. **WhatsApp Business API** - Service booking notifications
5. **Unsplash API** - Default product images (optional)

---

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Tablets in portrait */
md: 768px   /* Tablets in landscape */
lg: 1024px  /* Small desktops */
xl: 1280px  /* Medium desktops */
2xl: 1536px /* Large desktops */
```

---

## 🎯 Performance Optimizations

1. **Code Splitting** - Lazy loaded pages
2. **Image Optimization** - Lazy loading, compression
3. **Tree Shaking** - Unused code removal
4. **Minification** - Size reduction
5. **Caching** - Browser caching headers
6. **Bundle Analysis** - Monitor package sizes

---

## 🔄 Component Hierarchy

```
App
├── HelmetProvider (SEO)
├── CartProvider (State)
├── BrowserRouter (Routing)
│   ├── Navbar
│   ├── Routes
│   │   ├── HomePage
│   │   │   ├── Hero
│   │   │   ├── Products
│   │   │   ├── Services
│   │   │   ├── Testimonials
│   │   │   └── Contact
│   │   ├── ProductDetailPage
│   │   ├── BlogListPage
│   │   ├── BlogPostPage
│   │   ├── SewingMachinesBangalore
│   │   └── 404Page
│   ├── Footer
│   ├── RAGChatBot
│   └── Cart
└── Global Modals
    └── ServiceScheduleModal
```

---

## 📝 Recent Additions (January 2026)

1. **Google Analytics Integration** - Complete tracking setup
2. **Google Merchant Center** - Product feed generation
3. **AnimatedNumber Component** - Animated statistics counters
4. **ServiceScheduleModal** - WhatsApp integrated booking
5. **Enhanced Styling** - Hover effect improvements
6. **SEO Enhancements** - Structured data integration

---

## 🚀 Future Enhancements

- [ ] User authentication system
- [ ] Order management dashboard
- [ ] Inventory management
- [ ] Admin panel
- [ ] Advanced search with filters
- [ ] Wishlist functionality
- [ ] Product reviews system
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Live chat integration

---

## 📞 Support & Contact

**Email:** srsewingworld@gmail.com  
**Phone:** +91 9019229243  
**Website:** https://srsewingworld.in  
**Address:** Unit -02, 2nd Cross Road, Om shakti temple, Mangammanapalya, Bengaluru, Karnataka 560068

---

**Document Version:** 1.0  
**Last Updated:** January 28, 2026  
**Maintained By:** Development Team
