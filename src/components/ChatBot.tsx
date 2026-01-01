import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { productData, Product } from './productData';

// Enhanced response generation with product database integration
const generateHumanResponse = (userInput: string, context: string[]): string => {
  const input = userInput.toLowerCase();
  const hasDiscussed = (topic: string) => context.some(c => c.toLowerCase().includes(topic));
  
  // Product recognition and information
  const findProduct = (searchTerm: string): Product | null => {
    const cleanSearchTerm = searchTerm.toLowerCase().replace(/\s+/g, '');
    const searchWords = searchTerm.toLowerCase().split(/\s+/).filter(word => word.length > 0);
    
    // Debug: Log the search attempt
    console.log(`Searching for: "${searchTerm}"`);
    console.log(`Clean search term: "${cleanSearchTerm}"`);
    console.log(`Search words: [${searchWords.join(', ')}]`);
    
    // First, try exact matches
    let exactMatch = productData.find(product => 
      product.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (exactMatch) {
      console.log(`Found exact match: "${exactMatch.name}"`);
      return exactMatch;
    }
    
    // Then try clean matches (no spaces)
    let cleanMatch = productData.find(product => {
      const cleanProductName = product.name.toLowerCase().replace(/\s+/g, '');
      return cleanProductName === cleanSearchTerm;
    });
    if (cleanMatch) {
      console.log(`Found clean match: "${cleanMatch.name}"`);
      return cleanMatch;
    }
    
    // Then try word-by-word exact matching
    let wordMatch = productData.find(product => {
      const productWords = product.name.toLowerCase().split(/\s+/).filter(word => word.length > 0);
      
      // Check if all search words are present in product name
      const allWordsMatch = searchWords.every(searchWord => 
        productWords.some(productWord => productWord === searchWord)
      );
      
      // Check if all product words are present in search
      const allProductWordsMatch = productWords.every(productWord => 
        searchWords.some(searchWord => searchWord === productWord)
      );
      
      return allWordsMatch && allProductWordsMatch;
    });
    if (wordMatch) {
      console.log(`Found word match: "${wordMatch.name}"`);
      return wordMatch;
    }
    
    // Finally, try partial matches but with higher precision
    const partialMatch = productData.find(product => {
      const productWords = product.name.toLowerCase().split(/\s+/).filter(word => word.length > 0);
      
      // Check if the search term contains the product name or vice versa
      if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) return true;
      if (searchTerm.toLowerCase().includes(product.name.toLowerCase())) return true;
      
      // Check if all search words are found in product words
      const searchWordsFound = searchWords.every(searchWord => 
        productWords.some(productWord => 
          productWord.includes(searchWord) || searchWord.includes(productWord)
        )
      );
      
      return searchWordsFound;
    });
    
    if (partialMatch) {
      console.log(`Found partial match: "${partialMatch.name}"`);
    } else {
      console.log(`No match found for: "${searchTerm}"`);
    }
    
    return partialMatch || null;
  };

  // Check for specific product queries
  const product = findProduct(input);
  if (product) {
    // Debug: Log the matched product to ensure correct matching
    console.log(`Matched "${input}" to product: "${product.name}"`);
    const priceInfo = product.salePrice ? `₹${product.salePrice.toLocaleString()}` : `₹${product.price.toLocaleString()}`;
    const originalPrice = product.salePrice ? ` (Original: ₹${product.price.toLocaleString()})` : '';
    const speedInfo = product.specifications?.find(spec => spec.includes('SPM') || spec.includes('speed')) || 'Up to 5,000 SPM';
    
    return `🎯 **${product.name}** - Excellent choice!

💰 **Price**: ${priceInfo}${originalPrice}
⚡ **Category**: ${product.category}
🔧 **Key Features**: 
• ${product.features.slice(0, 3).join('\n• ')}
📏 **Max Speed**: ${speedInfo}
🛡️ **Warranty**: ${product.warranty?.join(', ') || 'Standard warranty included'}

${product.description.split('\n')[0]}

Would you like to know more about:
• Detailed specifications
• Pricing and payment options
• Similar machines
• Warranty and service details`;
  }

  // Greeting responses
  if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('good morning') || input.includes('good afternoon')) {
    const greetings = [
      "Hello! I'm here to help you with all your sewing machine needs. What can I assist you with today? 😊",
      "Hi there! Welcome to SR Sewing World. How can I make your sewing journey better today?",
      "Hey! Great to see you here. I'm ready to help you find the perfect sewing solution. What's on your mind?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Thank you responses
  if (input.includes('thank') || input.includes('thanks')) {
    const thankResponses = [
      "You're very welcome! I'm always here to help. Is there anything else you'd like to know about our machines or services?",
      "My pleasure! Feel free to ask me anything else about sewing machines, repairs, or our services.",
      "Happy to help! Let me know if you need any other information about SR Sewing World."
    ];
    return thankResponses[Math.floor(Math.random() * thankResponses.length)];
  }
  
  // Product inquiries
  if (input.includes('machine') || input.includes('product') || input.includes('sewing') || input.includes('jack') || input.includes('industrial') || input.includes('domestic')) {
    if (input.includes('jack')) {
      const jackProducts = productData.filter(p => p.name.toLowerCase().includes('jack'));
      if (jackProducts.length > 0) {
        const productList = jackProducts.map(p => `${p.name} (₹${p.salePrice?.toLocaleString() || p.price.toLocaleString()})`).join(', ');
        return `We have several excellent JACK machines available:

${productList}

Each JACK machine offers energy-saving direct-drive motors, automatic lubrication, and professional-grade performance. Which specific JACK model interests you most?`;
      }
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('budget')) {
      const domesticProducts = productData.filter(p => p.category === 'Domestic Machines');
      const industrialProducts = productData.filter(p => p.category === 'Industrial Machines');
      
      return `I'd be happy to help you find a machine within your budget! 

🏠 **Domestic Machines**: Starting from ₹${Math.min(...domesticProducts.map(p => p.salePrice || p.price)).toLocaleString()}
🏭 **Industrial Machines**: Starting from ₹${Math.min(...industrialProducts.map(p => p.salePrice || p.price)).toLocaleString()}

What type of sewing work are you planning to do? This will help me recommend the best value option for you.`;
    }
    
    if (input.includes('industrial')) {
      const industrialProducts = productData.filter(p => p.category === 'Industrial Machines');
      const productList = industrialProducts.map(p => `${p.name} (₹${p.salePrice?.toLocaleString() || p.price.toLocaleString()})`).join(', ');
      
      return `Our industrial machines are perfect for commercial use! Here are our top industrial models:

${productList}

These machines handle light to heavy fabrics with ease, run up to 5,000 SPM, and come with complete packages including table and stand. We also offer installation, training, and comprehensive after-sales support. Which model interests you?`;
    }
    
    if (input.includes('domestic') || input.includes('home')) {
      const domesticProducts = productData.filter(p => p.category === 'Domestic Machines');
      const productList = domesticProducts.map(p => `${p.name} (₹${p.salePrice?.toLocaleString() || p.price.toLocaleString()})`).join(', ');
      
      return `Perfect for home use! Here are our domestic sewing machines:

${productList}

These machines are designed for home sewing with user-friendly features, quiet operation, and reliable performance. Which one would you like to know more about?`;
    }
    
    if (hasDiscussed('machine')) {
      return "I see you're really interested in our machines! That's great. Since we've been talking about them, is there a specific aspect you'd like to dive deeper into? Perhaps the technical specifications, warranty details, or would you like to schedule a demonstration?";
    }
    
    return "We have an excellent range of sewing machines! From reliable domestic models to high-performance industrial machines. Each machine comes with quality assurance, expert guidance, and complete service support. What type of sewing are you planning to do - domestic, commercial, or industrial?";
  }
  
  // Service inquiries
  if (input.includes('service') || input.includes('repair') || input.includes('maintenance') || input.includes('fix') || input.includes('problem')) {
    if (input.includes('repair') || input.includes('fix') || input.includes('broken')) {
      return "Don't worry, we've got you covered! Our expert technicians can repair all sewing machine brands using genuine spare parts. We offer quick turnaround times and quality guarantees. Common issues we fix include skipped stitches, tension problems, unusual noises, and fabric snagging. Would you like to schedule a service or tell me more about the specific issue?";
    }
    if (input.includes('maintenance') || input.includes('amc')) {
      return "Smart thinking! Regular maintenance is key to a long-lasting sewing machine. We offer comprehensive AMC packages that include regular check-ups, priority service, cost savings, and extended warranty. It's like having a personal technician for your machines! Interested in learning more about our AMC plans?";
    }
    if (hasDiscussed('service')) {
      return "Since we've discussed our services, would you like me to connect you with one of our service technicians for a detailed consultation? Or is there a specific service timeline you're working with?";
    }
    return "We provide complete service solutions! Our services include expert repair & maintenance, AMC packages, professional installation & training, and 24/7 customer support. Our experienced technicians use genuine parts and offer quality guarantees. What specific service do you need help with?";
  }
  
  // Training and installation
  if (input.includes('training') || input.includes('install') || input.includes('setup') || input.includes('learn') || input.includes('how to')) {
    return "Absolutely! We provide professional installation and comprehensive hands-on training for all our machines. Our experts will set up your machine properly and teach you optimal usage techniques. You'll also get operation manuals and follow-up support. It's all part of ensuring you get the most out your investment! When would you like to schedule this?";
  }
  
  // Support inquiries
  if (input.includes('support') || input.includes('help') || input.includes('contact') || input.includes('phone') || input.includes('whatsapp')) {
    return "We're here for you 24/7! You can reach our support team via phone, WhatsApp, or email. We also provide remote assistance when possible. Our customer-first approach means your satisfaction is our priority, backed by excellent after-sales service. What's the best way for our team to reach you?";
  }
  
  // Warranty and quality
  if (input.includes('warranty') || input.includes('guarantee') || input.includes('quality')) {
    return "Quality and reliability are our top priorities! Every machine meets our rigorous quality standards before reaching you. We provide comprehensive warranties, and our expert technicians ensure everything is perfect. Plus, with our AMC packages, you get extended warranty coverage and priority service. Your peace of mind is important to us!";
  }
  
  // Buying guidance
  if (input.includes('buy') || input.includes('purchase') || input.includes('which') || input.includes('recommend') || input.includes('best') || input.includes('choose')) {
    if (hasDiscussed('recommendation')) {
      return "Based on our conversation, I think I can give you a more targeted recommendation now. What's your budget range, and will this be for home use, small business, or large-scale production?";
    }
    return "I'd love to help you choose the perfect machine! The best choice depends on your specific needs. For commercial use, our JACK F5 industrial machine is excellent. For home use, we have great domestic options too. Could you tell me more about what type of sewing you'll be doing? Garments, upholstery, leather work, or general crafting?";
  }
  
  // Location and visit
  if (input.includes('location') || input.includes('address') || input.includes('visit') || input.includes('showroom') || input.includes('where')) {
    return "We'd love to welcome you to our showroom! You can see all our machines in action and get hands-on experience. Our experts will be there to guide you and answer all your questions. Would you like me to help you schedule a visit or get our location details?";
  }

  // Yes/No responses
  if (input.includes('yes') || input.includes('sure') || input.includes('okay') || input.includes('ok')) {
    return "Perfect! I'm here to help you every step of the way. What specific information would you like me to provide, or would you prefer to speak with one of our specialists directly?";
  }

  if (input.includes('no') || input.includes('not really') || input.includes('maybe later')) {
    return "No problem at all! I'm here whenever you need me. Feel free to browse our website or ask me anything else about our machines and services. Is there anything else I can help you with today?";
  }
  
  // Default helpful responses with context awareness
  const defaultResponses = [
    "That's a great question! I'm here to help you with anything related to sewing machines, services, or repairs. Could you tell me a bit more about what you're looking for?",
    "I'd be happy to assist you! Whether you need information about our machines, services, or have a specific sewing challenge, I'm here to help. What's on your mind?",
    "Thanks for reaching out! As your SR Sewing World assistant, I can help you with machine recommendations, service inquiries, technical support, or any other sewing-related questions. How can I make your sewing journey better?",
    "I'm here to help make your sewing experience amazing! Whether you're looking for a new machine, need service support, or have questions about our products, I've got you covered. What would you like to know more about?"
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hello! I\'m your SR Sewing World Assistant. I can help you with machine recommendations, service inquiries, repairs, and more. What can I help you with today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversationContext, setConversationContext] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setMessages(msgs => [...msgs, { from: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);
    
    // Update conversation context
    setConversationContext(prev => [...prev, userMessage]);
    
    // Simulate typing delay for more human-like interaction
    setTimeout(() => {
      const response = generateHumanResponse(userMessage, conversationContext);
      setMessages(msgs => [...msgs, { from: 'bot', text: response }]);
      setConversationContext(prev => [...prev, response]);
      setLoading(false);
    }, 1200 + Math.random() * 800); // Random delay between 1.2-2.0 seconds

    // Refocus the input after sending
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        onClick={() => setOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Open chat bot"
        style={{ boxShadow: '0 8px 32px rgba(255,65,108,0.25)' }}
      >
        <MessageSquare className="h-7 w-7 animate-bounce" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-[#ff416c]/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white">
              <span className="font-bold text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 animate-pulse" /> Chat with us
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="hover:text-gray-200">
                <X className="h-6 w-6" />
              </button>
            </div>
            {/* Messages */}
            <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto bg-gradient-to-br from-white via-[#fff6f6] to-[#f9f6ff]" style={{ minHeight: 320, maxHeight: 400 }}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: msg.from === 'user' ? 80 : -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl shadow-md max-w-[80%] text-sm font-medium ${
                      msg.from === 'user'
                        ? 'bg-[#ff416c] text-white rounded-br-sm animate-fadeInRight'
                        : 'bg-white text-gray-800 border border-[#ff416c]/10 rounded-bl-sm animate-fadeInLeft'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="px-4 py-2 rounded-2xl shadow-md bg-white border border-[#ff416c]/10 text-gray-800 text-sm font-medium animate-pulse flex items-center space-x-1">
                    <span>Typing</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-[#ff416c] rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-[#ff416c] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-1 bg-[#ff416c] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={chatEndRef} />
              
              {/* Quick Action Buttons - shown only at the start */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2 mt-3"
                >
                  <p className="text-xs text-gray-500 mb-2">Quick actions:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "View machines",
                      "Service inquiry", 
                      "Get pricing",
                      "Schedule demo"
                    ].map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setInput(action);
                          setTimeout(() => handleSend(), 100);
                          setTimeout(() => { inputRef.current?.focus(); }, 200);
                        }}
                        className="px-3 py-1 text-xs bg-[#ff416c]/10 text-[#ff416c] rounded-full hover:bg-[#ff416c]/20 transition-colors border border-[#ff416c]/20"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
            {/* Input */}
            <form
              className="flex items-center gap-2 px-4 py-3 border-t bg-white"
              onSubmit={e => {
                e.preventDefault();
                handleSend();
              }}
            >
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#ff416c] focus:outline-none text-sm bg-white"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                ref={inputRef}
              />
              <button
                type="submit"
                className="p-2 rounded-full bg-[#ff416c] hover:bg-[#ff4b2b] text-white transition-colors"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot; 