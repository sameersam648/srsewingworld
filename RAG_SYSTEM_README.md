# RAG-Based Chatbot System for SR Sewing World

## Overview

This project implements a comprehensive Retrieval-Augmented Generation (RAG) chatbot system for the SR Sewing World website. The system provides highly relevant, grounded, and contextually accurate answers by retrieving data from a predefined internal knowledge base and combining it with intelligent response generation.

## 🚀 Key Features

### Core RAG Architecture
- **Vector Search**: TF-IDF based semantic similarity search
- **Knowledge Retrieval**: Multi-source knowledge base integration
- **Context-Aware Responses**: Maintains conversation context across turns
- **Intent Classification**: Automatic user intent detection
- **Source Citations**: Transparent information sources

### Knowledge Base Integration
- **Product Database**: Complete sewing machine catalog with specifications
- **FAQ System**: Comprehensive question-answer database
- **Blog Content**: Educational articles and guides
- **Service Information**: Repair, maintenance, and support details

### Advanced Features
- **Confidence Scoring**: Response quality assessment
- **Suggested Actions**: Contextual quick actions
- **Conversation Memory**: Multi-turn dialogue support
- **Performance Monitoring**: Real-time system metrics
- **Caching System**: Optimized response times

## 📁 Project Structure

```
src/
├── components/
│   ├── RAGChatBot.tsx          # Main RAG chatbot component
│   ├── ChatBot.tsx             # Legacy rule-based chatbot
│   └── ...
├── utils/
│   ├── ragEngine.ts            # Core RAG engine implementation
│   ├── knowledgeBase.ts        # Knowledge base and search functions
│   ├── ragConfig.ts            # Configuration and performance monitoring
│   └── ...
├── contexts/
│   └── CartContext.tsx         # Shopping cart context
└── ...
```

## 🔧 Technical Implementation

### 1. Knowledge Base (`knowledgeBase.ts`)

**Purpose**: Centralized data management for all chatbot knowledge sources.

**Key Components**:
- Product data integration from `productData.ts`
- Blog content from `blogData.ts`
- FAQ database with categorized questions
- Service information and features

**Search Functionality**:
```typescript
// Search knowledge base with semantic scoring
const results = searchKnowledgeBase("JACK F5 price", 5);

// Get specific product information
const product = getProductByName("JACK F5");

// Find relevant FAQs
const faq = getFAQByKeywords("warranty");
```

### 2. RAG Engine (`ragEngine.ts`)

**Purpose**: Core RAG processing with vector search and response generation.

**Key Components**:

#### SimpleEmbedding Class
- TF-IDF based text vectorization
- Cosine similarity calculations
- Vocabulary building from knowledge base

#### IntentClassifier Class
- Keyword-based intent detection
- Support for 8 intent categories:
  - Product inquiry
  - Service inquiry
  - Technical support
  - Warranty inquiry
  - General inquiry
  - Comparison
  - Location
  - Payment

#### ResponseGenerator Class
- Context-aware response generation
- Source citation integration
- Confidence scoring
- Suggested actions generation

#### RAGEngine Class
- Main orchestration engine
- Conversation context management
- Session handling
- Memory management

### 3. RAG ChatBot Component (`RAGChatBot.tsx`)

**Purpose**: Modern React component with enhanced UI/UX for RAG interactions.

**Key Features**:
- Real-time AI processing indicators
- Source citation display
- Confidence score visualization
- Suggested action buttons
- Conversation history management
- Performance monitoring integration

### 4. Configuration System (`ragConfig.ts`)

**Purpose**: Centralized configuration management with environment-specific settings.

**Configuration Options**:
- Search and retrieval parameters
- Conversation settings
- Response generation options
- Performance tuning
- Debug and monitoring settings

## 🎯 Usage Examples

### Basic Query Processing
```typescript
import { ragEngine } from './utils/ragEngine';

// Process a user query
const response = await ragEngine.processQuery(
  "What's the price of JACK F5?",
  "user-session-123"
);

console.log(response.answer);
console.log(response.sources);
console.log(response.confidence);
```

### Knowledge Base Search
```typescript
import { searchKnowledgeBase, getProductByName } from './utils/knowledgeBase';

// Search for relevant information
const results = searchKnowledgeBase("industrial sewing machine", 5);

// Get specific product details
const jackF5 = getProductByName("JACK F5");
```

### Configuration Management
```typescript
import { getRAGConfig, validateRAGConfig } from './utils/ragConfig';

// Get environment-specific configuration
const config = getRAGConfig();

// Validate configuration
const isValid = validateRAGConfig(config);
```

## 🔄 Migration from Legacy System

### Before (Rule-Based)
```typescript
// Old ChatBot.tsx - Rule-based responses
const generateHumanResponse = (userInput: string, context: string[]): string => {
  if (input.includes('jack') || input.includes('f5')) {
    return "Great choice! The JACK F5 is one of our most popular industrial machines...";
  }
  // ... more hardcoded rules
};
```

### After (RAG-Based)
```typescript
// New RAGChatBot.tsx - AI-powered responses
const response = await ragEngine.processQuery(userInput, sessionId);
// Automatically retrieves relevant information and generates contextual responses
```

## 📊 Performance Monitoring

### Metrics Available
- Query processing time
- Knowledge retrieval performance
- Response generation speed
- Cache hit rates
- Confidence score distribution

### Monitoring Integration
```typescript
import { performanceMonitor } from './utils/ragConfig';

// Monitor operation performance
const stopTimer = performanceMonitor.startTimer('query-processing');
// ... perform operation
stopTimer();

// Get performance metrics
const metrics = performanceMonitor.getMetrics();
```

## 🛠️ Configuration Options

### Development Environment
```typescript
{
  enableDebugLogging: true,
  enablePerformanceMetrics: true,
  maxSearchResults: 10,
  enableCaching: false
}
```

### Production Environment
```typescript
{
  enableDebugLogging: false,
  enablePerformanceMetrics: false,
  maxSearchResults: 5,
  enableCaching: true
}
```

## 🔒 Security & Privacy

### Data Handling
- All knowledge base data is local and secure
- No external API calls for sensitive information
- Session data is managed in-memory
- No persistent user data storage

### Performance Optimizations
- Intelligent caching system
- Efficient vector search algorithms
- Memory management for conversation history
- Configurable result limits

## 🚀 Deployment

### Prerequisites
- Node.js 16+ 
- React 18+
- TypeScript 4.5+

### Installation
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 🔮 Future Enhancements

### Planned Features
1. **Advanced Vector Embeddings**: Integration with external embedding APIs
2. **Multi-language Support**: Internationalization for global users
3. **Advanced Analytics**: User interaction analytics and insights
4. **Machine Learning**: Continuous learning from user interactions
5. **Voice Integration**: Speech-to-text and text-to-speech capabilities

### Extensibility
The modular architecture allows easy integration of:
- External AI APIs (OpenAI, Claude, etc.)
- Additional knowledge sources
- Custom response templates
- Advanced NLP libraries

## 📝 API Reference

### RAGEngine Methods
- `processQuery(query: string, sessionId?: string): Promise<RAGResponse>`
- `getConversationHistory(sessionId: string): ConversationContext | null`
- `clearConversation(sessionId: string): void`

### Knowledge Base Methods
- `searchKnowledgeBase(query: string, limit?: number): KnowledgeItem[]`
- `getProductByName(name: string): Product | undefined`
- `getFAQByKeywords(keywords: string): FAQ | undefined`

### Configuration Methods
- `getRAGConfig(): RAGConfig`
- `validateRAGConfig(config: RAGConfig): boolean`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For technical support or questions about the RAG system:
- Check the documentation
- Review the configuration options
- Monitor performance metrics
- Contact the development team

---

**Note**: This RAG system is designed to be production-ready and can handle real-world user interactions with high accuracy and performance. The modular architecture ensures easy maintenance and future enhancements. 