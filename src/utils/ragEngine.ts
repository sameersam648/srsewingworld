import { KnowledgeItem, searchKnowledgeBase } from './knowledgeBase';

export interface ConversationContext {
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
  }>;
  retrievedContext: KnowledgeItem[];
  userIntent: string;
}

export interface RAGResponse {
  answer: string;
  sources: KnowledgeItem[];
  confidence: number;
  suggestedActions: string[];
}

// Simple text embedding using TF-IDF approach
class SimpleEmbedding {
  private vocabulary: Set<string> = new Set();
  private idf: Map<string, number> = new Map();
  private documents: string[] = [];

  constructor() {
    this.buildVocabulary();
  }

  private buildVocabulary() {
    // Build vocabulary from knowledge base
    const allText = searchKnowledgeBase('', 1000).map(item => item.content);
    this.documents = allText;
    
    // Extract unique words
    allText.forEach(text => {
      const words = this.tokenize(text);
      words.forEach(word => this.vocabulary.add(word));
    });

    // Calculate IDF for each word
    this.vocabulary.forEach(word => {
      const docCount = allText.filter(text => 
        this.tokenize(text).includes(word)
      ).length;
      this.idf.set(word, Math.log(allText.length / (docCount + 1)));
    });
  }

  private tokenize(text: string): string[] {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2);
  }

  private getTFIDF(text: string): Map<string, number> {
    const words = this.tokenize(text);
    const tf: Map<string, number> = new Map();
    
    // Calculate TF
    words.forEach(word => {
      tf.set(word, (tf.get(word) || 0) + 1);
    });

    // Convert to TF-IDF
    const tfidf = new Map<string, number>();
    tf.forEach((count, word) => {
      const idf = this.idf.get(word) || 0;
      tfidf.set(word, count * idf);
    });

    return tfidf;
  }

  public getEmbedding(text: string): Map<string, number> {
    return this.getTFIDF(text);
  }

  public cosineSimilarity(vec1: Map<string, number>, vec2: Map<string, number>): number {
    const allWords = new Set([...vec1.keys(), ...vec2.keys()]);
    
    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;

    allWords.forEach(word => {
      const val1 = vec1.get(word) || 0;
      const val2 = vec2.get(word) || 0;
      
      dotProduct += val1 * val2;
      norm1 += val1 * val1;
      norm2 += val2 * val2;
    });

    if (norm1 === 0 || norm2 === 0) return 0;
    return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
  }
}

// Intent classification
class IntentClassifier {
  private intents = {
    product_inquiry: ['machine', 'product', 'jack', 'industrial', 'domestic', 'price', 'cost', 'buy', 'purchase'],
    service_inquiry: ['service', 'repair', 'maintenance', 'fix', 'problem', 'amc', 'installation', 'training'],
    technical_support: ['how to', 'troubleshoot', 'issue', 'problem', 'not working', 'error'],
    warranty_inquiry: ['warranty', 'guarantee', 'coverage', 'return', 'refund'],
    general_inquiry: ['hello', 'hi', 'help', 'information', 'about', 'contact'],
    comparison: ['compare', 'difference', 'vs', 'versus', 'better', 'best'],
    location: ['where', 'location', 'address', 'visit', 'showroom'],
    payment: ['payment', 'financing', 'emi', 'installment', 'cash', 'card']
  };

  public classifyIntent(query: string): string {
    const queryLower = query.toLowerCase();
    let maxScore = 0;
    let bestIntent = 'general_inquiry';

    Object.entries(this.intents).forEach(([intent, keywords]) => {
      const score = keywords.reduce((total, keyword) => {
        return total + (queryLower.includes(keyword) ? 1 : 0);
      }, 0);
      
      if (score > maxScore) {
        maxScore = score;
        bestIntent = intent;
      }
    });

    return bestIntent;
  }
}

// Response Generator
class ResponseGenerator {
  private embedding = new SimpleEmbedding();
  private intentClassifier = new IntentClassifier();

  public generateResponse(
    query: string, 
    context: ConversationContext
  ): RAGResponse {
    const intent = this.intentClassifier.classifyIntent(query);
    const relevantItems = this.retrieveRelevantContent(query, context);
    
    let answer = this.generateAnswer(query, relevantItems, intent, context);
    let confidence = this.calculateConfidence(relevantItems, intent);
    let suggestedActions = this.generateSuggestedActions(intent, relevantItems);

    // Add source citations
    if (relevantItems.length > 0) {
      answer += this.addSourceCitations(relevantItems);
    }

    return {
      answer,
      sources: relevantItems,
      confidence,
      suggestedActions
    };
  }

  private retrieveRelevantContent(
    query: string, 
    context: ConversationContext
  ): KnowledgeItem[] {
    // Get base search results
    const baseResults = searchKnowledgeBase(query, 8);
    
    // Enhance with semantic search
    const queryEmbedding = this.embedding.getEmbedding(query);
    const scoredResults = baseResults.map(item => {
      const itemEmbedding = this.embedding.getEmbedding(item.content);
      const similarity = this.embedding.cosineSimilarity(queryEmbedding, itemEmbedding);
      return { ...item, similarity };
    });

    // Sort by similarity and return top results
    return scoredResults
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5)
      .map(({ similarity, ...item }) => item);
  }

  private generateAnswer(
    query: string, 
    relevantItems: KnowledgeItem[], 
    intent: string, 
    context: ConversationContext
  ): string {
    const queryLower = query.toLowerCase();
    
    // Handle greetings
    if (intent === 'general_inquiry' && this.isGreeting(queryLower)) {
      return this.generateGreeting(context);
    }

    // Handle product inquiries
    if (intent === 'product_inquiry') {
      return this.generateProductResponse(query, relevantItems, context);
    }

    // Handle service inquiries
    if (intent === 'service_inquiry') {
      return this.generateServiceResponse(query, relevantItems, context);
    }

    // Handle technical support
    if (intent === 'technical_support') {
      return this.generateTechnicalResponse(query, relevantItems, context);
    }

    // Handle warranty inquiries
    if (intent === 'warranty_inquiry') {
      return this.generateWarrantyResponse(query, relevantItems, context);
    }

    // Handle comparisons
    if (intent === 'comparison') {
      return this.generateComparisonResponse(query, relevantItems, context);
    }

    // Handle location inquiries
    if (intent === 'location') {
      return this.generateLocationResponse(query, relevantItems, context);
    }

    // Handle payment inquiries
    if (intent === 'payment') {
      return this.generatePaymentResponse(query, relevantItems, context);
    }

    // Default response using retrieved content
    return this.generateDefaultResponse(query, relevantItems, context);
  }

  private isGreeting(query: string): boolean {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'];
    return greetings.some(greeting => query.includes(greeting));
  }

  private generateGreeting(context: ConversationContext): string {
    const greetings = [
      "Hello! I'm your SR Sewing World Assistant. I can help you with machine recommendations, service inquiries, repairs, and more. What can I help you with today? 😊",
      "Hi there! Welcome to SR Sewing World. How can I make your sewing journey better today?",
      "Hey! Great to see you here. I'm ready to help you find the perfect sewing solution. What's on your mind?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  private generateProductResponse(
    query: string, 
    relevantItems: KnowledgeItem[], 
    context: ConversationContext
  ): string {
    const productItems = relevantItems.filter(item => item.type === 'product');
    
    if (productItems.length === 0) {
      return "I'd be happy to help you find the perfect sewing machine! We have a wide range of domestic and industrial machines. Could you tell me more about your specific needs - are you looking for home use, commercial use, or industrial applications?";
    }

    const product = productItems[0];
    const metadata = product.metadata;
    
    let response = `Great choice! The ${product.content.split(':')[0]} is one of our most popular machines. `;
    
    if (metadata.price) {
      response += `It's priced at ₹${metadata.price.toLocaleString('en-IN')} and `;
    }
    
    if (metadata.features && metadata.features.length > 0) {
      response += `features ${metadata.features.slice(0, 3).join(', ')}. `;
    }
    
    response += "Would you like to know more about its specific features, pricing, or see our other options?";
    
    return response;
  }

  private generateServiceResponse(
    query: string, 
    relevantItems: KnowledgeItem[], 
    context: ConversationContext
  ): string {
    const serviceItems = relevantItems.filter(item => item.type === 'service' || item.type === 'faq');
    
    if (serviceItems.length === 0) {
      return "We provide comprehensive service solutions including expert repair & maintenance, AMC packages, professional installation & training, and 24/7 customer support. What specific service do you need help with?";
    }

    const service = serviceItems[0];
    return service.content.split('A: ')[1] || service.content;
  }

  private generateTechnicalResponse(
    query: string, 
    relevantItems: KnowledgeItem[], 
    context: ConversationContext
  ): string {
    const technicalItems = relevantItems.filter(item => 
      item.type === 'faq' || item.content.toLowerCase().includes('how to')
    );
    
    if (technicalItems.length === 0) {
      return "I can help you with technical issues and troubleshooting. Could you describe the specific problem you're experiencing with your sewing machine?";
    }

    return technicalItems[0].content.split('A: ')[1] || technicalItems[0].content;
  }

  private generateWarrantyResponse(
    query: string, 
    relevantItems: KnowledgeItem[], 
    context: ConversationContext
  ): string {
    const warrantyItems = relevantItems.filter(item => 
      item.type === 'faq' && item.content.toLowerCase().includes('warranty')
    );
    
    if (warrantyItems.length === 0) {
      return "We provide comprehensive warranties on all our machines: 1-year service warranty and 3-years board and PCB warranty. This covers parts, labor, and technical support to ensure your machine operates perfectly.";
    }

    return warrantyItems[0].content.split('A: ')[1] || warrantyItems[0].content;
  }

  private generateComparisonResponse(
    query: string, 
    relevantItems: KnowledgeItem[], 
    context: ConversationContext
  ): string {
    const productItems = relevantItems.filter(item => item.type === 'product');
    
    if (productItems.length < 2) {
      return "I'd be happy to help you compare our machines! We have various models for different needs. Could you tell me what you're looking to compare - perhaps domestic vs industrial, or different JACK models?";
    }

    const products = productItems.slice(0, 2);
    let response = "Here's a comparison of our machines:\n\n";
    
    products.forEach(product => {
      const name = product.content.split(':')[0];
      const metadata = product.metadata;
      response += `**${name}**: ${metadata.price ? `₹${metadata.price.toLocaleString('en-IN')}` : 'Contact for pricing'}. `;
      if (metadata.features && metadata.features.length > 0) {
        response += `Key features: ${metadata.features.slice(0, 2).join(', ')}.\n\n`;
      }
    });

    response += "Would you like more detailed specifications or help choosing the right one for your needs?";
    
    return response;
  }

  private generateLocationResponse(
    query: string, 
    relevantItems: KnowledgeItem[], 
    context: ConversationContext
  ): string {
    return "We'd love to welcome you to our showroom! You can see all our machines in action and get hands-on experience. Our experts will be there to guide you and answer all your questions. Would you like me to help you schedule a visit or get our location details?";
  }

  private generatePaymentResponse(
    query: string, 
    relevantItems: KnowledgeItem[], 
    context: ConversationContext
  ): string {
    const paymentItems = relevantItems.filter(item => 
      item.type === 'faq' && item.content.toLowerCase().includes('payment')
    );
    
    if (paymentItems.length === 0) {
      return "We accept various payment methods including cash, bank transfers, UPI payments, and card payments. We also offer financing options and EMI plans to make your purchase more affordable. Contact us for detailed payment terms.";
    }

    return paymentItems[0].content.split('A: ')[1] || paymentItems[0].content;
  }

  private generateDefaultResponse(
    query: string, 
    relevantItems: KnowledgeItem[], 
    context: ConversationContext
  ): string {
    if (relevantItems.length === 0) {
      return "That's a great question! I'm here to help you with anything related to sewing machines, services, or repairs. Could you tell me a bit more about what you're looking for?";
    }

    const bestMatch = relevantItems[0];
    if (bestMatch.type === 'faq') {
      return bestMatch.content.split('A: ')[1] || bestMatch.content;
    }

    return bestMatch.content;
  }

  private calculateConfidence(relevantItems: KnowledgeItem[], intent: string): number {
    if (relevantItems.length === 0) return 0.3;
    
    const avgSimilarity = relevantItems.reduce((sum, item) => sum + 0.8, 0) / relevantItems.length;
    const intentConfidence = intent !== 'general_inquiry' ? 0.2 : 0;
    
    return Math.min(0.9, avgSimilarity + intentConfidence);
  }

  private generateSuggestedActions(intent: string, relevantItems: KnowledgeItem[]): string[] {
    const actions: string[] = [];
    
    switch (intent) {
      case 'product_inquiry':
        actions.push('View product details', 'Compare models', 'Get pricing');
        break;
      case 'service_inquiry':
        actions.push('Schedule service', 'Get AMC quote', 'Contact technician');
        break;
      case 'technical_support':
        actions.push('Troubleshoot issue', 'Schedule repair', 'Get remote support');
        break;
      default:
        actions.push('Browse products', 'Contact support', 'Schedule demo');
    }
    
    return actions;
  }

  private addSourceCitations(relevantItems: KnowledgeItem[]): string {
    const sources = relevantItems.slice(0, 2).map(item => {
      switch (item.type) {
        case 'product':
          return `product information`;
        case 'faq':
          return `frequently asked questions`;
        case 'blog':
          return `our blog`;
        case 'service':
          return `service information`;
        default:
          return `our knowledge base`;
      }
    });
    
    if (sources.length === 0) return '';
    
    return `\n\n*This information is based on ${sources.join(' and ')}.`;
  }
}

// Main RAG Engine
export class RAGEngine {
  private responseGenerator = new ResponseGenerator();
  private conversationContexts = new Map<string, ConversationContext>();

  public async processQuery(
    query: string, 
    sessionId: string = 'default'
  ): Promise<RAGResponse> {
    // Get or create conversation context
    let context = this.conversationContexts.get(sessionId);
    if (!context) {
      context = {
        messages: [],
        retrievedContext: [],
        userIntent: ''
      };
      this.conversationContexts.set(sessionId, context);
    }

    // Add user message to context
    context.messages.push({
      role: 'user',
      content: query,
      timestamp: Date.now()
    });

    // Generate response
    const response = this.responseGenerator.generateResponse(query, context);

    // Add assistant response to context
    context.messages.push({
      role: 'assistant',
      content: response.answer,
      timestamp: Date.now()
    });

    // Update context
    context.retrievedContext = response.sources;
    context.userIntent = this.responseGenerator['intentClassifier'].classifyIntent(query);

    // Keep only last 10 messages for memory management
    if (context.messages.length > 10) {
      context.messages = context.messages.slice(-10);
    }

    return response;
  }

  public getConversationHistory(sessionId: string = 'default'): ConversationContext | null {
    return this.conversationContexts.get(sessionId) || null;
  }

  public clearConversation(sessionId: string = 'default'): void {
    this.conversationContexts.delete(sessionId);
  }

  public getAllConversations(): Map<string, ConversationContext> {
    return new Map(this.conversationContexts);
  }
}

// Export singleton instance
export const ragEngine = new RAGEngine(); 