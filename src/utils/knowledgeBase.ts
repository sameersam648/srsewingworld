import { productData, Product } from '../components/productData';
import { posts, Post } from '../blogData';

export interface KnowledgeItem {
  id: string;
  content: string;
  type: 'product' | 'blog' | 'faq' | 'service';
  category: string;
  tags: string[];
  metadata: Record<string, any>;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

// FAQ Database
const faqs: FAQ[] = [
  {
    question: "What's the difference between domestic and industrial sewing machines?",
    answer: "Domestic machines are designed for home use with lighter fabrics and occasional sewing. Industrial machines like JACK F5 are built for heavy-duty, continuous use with thicker materials and higher speeds (up to 5,000 SPM). Industrial machines also have features like automatic lubrication, thread trimming, and energy-efficient motors.",
    category: "Machine Types",
    tags: ["domestic", "industrial", "comparison", "features"]
  },
  {
    question: "How much does a JACK F5 industrial machine cost?",
    answer: "The JACK F5 industrial sewing machine is priced between ₹22,999-₹28,999. This includes the complete package with table, stand, oil pan, parts kit, and heavy-duty accessories. The price varies based on current market rates and any ongoing promotions.",
    category: "Pricing",
    tags: ["jack f5", "price", "cost", "industrial"]
  },
  {
    question: "What warranty do you provide on sewing machines?",
    answer: "We provide comprehensive warranties on all our machines: 1-year service warranty and 3-years board and PCB warranty. This covers parts, labor, and technical support to ensure your machine operates perfectly.",
    category: "Warranty",
    tags: ["warranty", "service", "support", "coverage"]
  },
  {
    question: "Do you provide installation and training services?",
    answer: "Yes! We provide professional installation and comprehensive hands-on training for all our machines. Our experts will set up your machine properly, teach you optimal usage techniques, and provide operation manuals and follow-up support.",
    category: "Services",
    tags: ["installation", "training", "setup", "support"]
  },
  {
    question: "What maintenance does an industrial sewing machine need?",
    answer: "Industrial machines need regular maintenance including oil changes, cleaning, tension adjustments, and periodic inspections. We offer AMC (Annual Maintenance Contract) packages that include regular check-ups, priority service, cost savings, and extended warranty coverage.",
    category: "Maintenance",
    tags: ["maintenance", "amc", "service", "care"]
  },
  {
    question: "Can you repair other brands of sewing machines?",
    answer: "Absolutely! Our expert technicians can repair all sewing machine brands using genuine spare parts. We handle common issues like skipped stitches, tension problems, unusual noises, and fabric snagging with quick turnaround times and quality guarantees.",
    category: "Repairs",
    tags: ["repair", "service", "brands", "technicians"]
  },
  {
    question: "What fabrics can the JACK F5 handle?",
    answer: "The JACK F5 is designed for light to heavy fabrics. It can handle cotton, denim, leather, synthetics, and upholstery materials. For very heavy work, there's an 'H' variant with stronger needles (DB×5 #18–21) and extended stitch length (7mm).",
    category: "Capabilities",
    tags: ["jack f5", "fabrics", "materials", "capabilities"]
  },
  {
    question: "How energy efficient are your industrial machines?",
    answer: "Our industrial machines are highly energy efficient. The JACK F5 uses a direct-drive motor that reduces power consumption by up to 70% compared to traditional clutch motors. The JACK A2B saves approximately 446 kWh per year, making them cost-effective for long-term use.",
    category: "Energy",
    tags: ["energy", "efficiency", "power", "cost"]
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including cash, bank transfers, UPI payments, and card payments. We also offer financing options and EMI plans to make your purchase more affordable. Contact us for detailed payment terms.",
    category: "Payment",
    tags: ["payment", "financing", "emi", "methods"]
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing options and EMI plans to make industrial sewing machines more accessible. We can work with your budget and provide customized payment plans. Contact our sales team for detailed financing information.",
    category: "Financing",
    tags: ["financing", "emi", "payment", "budget"]
  }
];

// Service Information
const services = [
  {
    name: "Machine Sales",
    description: "Complete range of domestic and industrial sewing machines from trusted brands like JACK. Each machine comes with quality assurance, expert guidance, and complete service support.",
    features: ["Wide selection", "Expert consultation", "Quality assurance", "After-sales support"],
    category: "Sales"
  },
  {
    name: "Repair & Maintenance",
    description: "Expert repair services for all sewing machine brands using genuine spare parts. Quick turnaround times with quality guarantees.",
    features: ["All brands supported", "Genuine parts", "Quick service", "Quality guarantee"],
    category: "Service"
  },
  {
    name: "AMC Packages",
    description: "Annual Maintenance Contracts that include regular check-ups, priority service, cost savings, and extended warranty coverage.",
    features: ["Regular check-ups", "Priority service", "Cost savings", "Extended warranty"],
    category: "Service"
  },
  {
    name: "Installation & Training",
    description: "Professional installation and comprehensive hands-on training for optimal machine usage and performance.",
    features: ["Professional setup", "Hands-on training", "Operation manuals", "Follow-up support"],
    category: "Service"
  }
];

// Convert products to knowledge items
const productKnowledgeItems: KnowledgeItem[] = productData.map(product => ({
  id: `product-${product.id}`,
  content: `${product.name}: ${product.description}. Features: ${product.features.join(', ')}. Price: ₹${product.salePrice}. Category: ${product.category}.`,
  type: 'product',
  category: product.category,
  tags: [
    product.name.toLowerCase(),
    product.category.toLowerCase(),
    ...product.features.map(f => f.toLowerCase().split(' ').slice(0, 3).join(' ')),
    'sewing machine',
    'industrial',
    'domestic'
  ],
  metadata: {
    price: product.salePrice,
    features: product.features,
    specifications: product.specifications,
    accessories: product.accessories,
    useCases: product.useCases,
    warranty: product.warranty
  }
}));

// Convert blog posts to knowledge items
const blogKnowledgeItems: KnowledgeItem[] = posts.map(post => ({
  id: `blog-${post.id}`,
  content: `${post.title}: ${post.excerpt} ${post.content.replace(/<[^>]*>/g, ' ')}`,
  type: 'blog',
  category: post.category,
  tags: [
    post.category.toLowerCase(),
    'blog',
    'guide',
    'tips',
    'information'
  ],
  metadata: {
    date: post.date,
    title: post.title,
    excerpt: post.excerpt
  }
}));

// Convert FAQs to knowledge items
const faqKnowledgeItems: KnowledgeItem[] = faqs.map((faq, index) => ({
  id: `faq-${index}`,
  content: `Q: ${faq.question} A: ${faq.answer}`,
  type: 'faq',
  category: faq.category,
  tags: faq.tags,
  metadata: {
    question: faq.question,
    answer: faq.answer
  }
}));

// Convert services to knowledge items
const serviceKnowledgeItems: KnowledgeItem[] = services.map((service, index) => ({
  id: `service-${index}`,
  content: `${service.name}: ${service.description}. Features: ${service.features.join(', ')}.`,
  type: 'service',
  category: service.category,
  tags: [
    service.name.toLowerCase(),
    service.category.toLowerCase(),
    ...service.features.map(f => f.toLowerCase()),
    'service',
    'support'
  ],
  metadata: {
    name: service.name,
    features: service.features
  }
}));

// Combine all knowledge items
export const knowledgeBase: KnowledgeItem[] = [
  ...productKnowledgeItems,
  ...blogKnowledgeItems,
  ...faqKnowledgeItems,
  ...serviceKnowledgeItems
];

// Search function for knowledge base
export const searchKnowledgeBase = (query: string, limit: number = 5): KnowledgeItem[] => {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(' ').filter(word => word.length > 2);
  
  const scoredItems = knowledgeBase.map(item => {
    let score = 0;
    
    // Exact matches get highest score
    if (item.content.toLowerCase().includes(queryLower)) {
      score += 10;
    }
    
    // Tag matches
    item.tags.forEach(tag => {
      if (queryWords.some(word => tag.includes(word))) {
        score += 5;
      }
    });
    
    // Category matches
    if (queryWords.some(word => item.category.toLowerCase().includes(word))) {
      score += 3;
    }
    
    // Content word matches
    queryWords.forEach(word => {
      const wordCount = (item.content.toLowerCase().match(new RegExp(word, 'g')) || []).length;
      score += wordCount;
    });
    
    return { ...item, score };
  });
  
  // Sort by score and return top results
  return scoredItems
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score, ...item }) => item);
};

// Get specific product by name
export const getProductByName = (name: string): Product | undefined => {
  return productData.find(product => 
    product.name.toLowerCase().includes(name.toLowerCase())
  );
};

// Get FAQ by question keywords
export const getFAQByKeywords = (keywords: string): FAQ | undefined => {
  const keywordLower = keywords.toLowerCase();
  return faqs.find(faq => 
    faq.question.toLowerCase().includes(keywordLower) ||
    faq.tags.some(tag => tag.includes(keywordLower))
  );
}; 