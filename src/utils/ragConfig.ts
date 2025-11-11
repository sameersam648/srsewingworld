export interface RAGConfig {
  // Search and retrieval settings
  maxSearchResults: number;
  minConfidenceThreshold: number;
  maxContextLength: number;
  
  // Conversation settings
  maxConversationHistory: number;
  sessionTimeout: number; // in milliseconds
  
  // Response generation settings
  enableSourceCitations: boolean;
  enableConfidenceScores: boolean;
  enableSuggestedActions: boolean;
  
  // Performance settings
  enableCaching: boolean;
  cacheExpiry: number; // in milliseconds
  
  // Debug settings
  enableDebugLogging: boolean;
  enablePerformanceMetrics: boolean;
}

export const defaultRAGConfig: RAGConfig = {
  // Search and retrieval settings
  maxSearchResults: 8,
  minConfidenceThreshold: 0.3,
  maxContextLength: 1000,
  
  // Conversation settings
  maxConversationHistory: 10,
  sessionTimeout: 30 * 60 * 1000, // 30 minutes
  
  // Response generation settings
  enableSourceCitations: true,
  enableConfidenceScores: true,
  enableSuggestedActions: true,
  
  // Performance settings
  enableCaching: true,
  cacheExpiry: 5 * 60 * 1000, // 5 minutes
  
  // Debug settings
  enableDebugLogging: false,
  enablePerformanceMetrics: false
};

// Environment-specific configurations
export const getRAGConfig = (): RAGConfig => {
  const env = import.meta.env.MODE || 'development';
  
  switch (env) {
    case 'production':
      return {
        ...defaultRAGConfig,
        enableDebugLogging: false,
        enablePerformanceMetrics: false,
        maxSearchResults: 5, // Reduce for production performance
        enableCaching: true
      };
    
    case 'development':
      return {
        ...defaultRAGConfig,
        enableDebugLogging: true,
        enablePerformanceMetrics: true,
        maxSearchResults: 10, // More results for development
        enableCaching: false // Disable caching for development
      };
    
    default:
      return defaultRAGConfig;
  }
};

// Utility functions for configuration
export const validateRAGConfig = (config: RAGConfig): boolean => {
  const errors: string[] = [];
  
  if (config.maxSearchResults < 1 || config.maxSearchResults > 20) {
    errors.push('maxSearchResults must be between 1 and 20');
  }
  
  if (config.minConfidenceThreshold < 0 || config.minConfidenceThreshold > 1) {
    errors.push('minConfidenceThreshold must be between 0 and 1');
  }
  
  if (config.maxConversationHistory < 1 || config.maxConversationHistory > 50) {
    errors.push('maxConversationHistory must be between 1 and 50');
  }
  
  if (config.sessionTimeout < 60000) { // Minimum 1 minute
    errors.push('sessionTimeout must be at least 60000ms (1 minute)');
  }
  
  if (errors.length > 0) {
    console.error('RAG Configuration validation errors:', errors);
    return false;
  }
  
  return true;
};

// Performance monitoring
export class RAGPerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  
  public startTimer(operation: string): () => void {
    const startTime = performance.now();
    return () => {
      const duration = performance.now() - startTime;
      if (!this.metrics.has(operation)) {
        this.metrics.set(operation, []);
      }
      this.metrics.get(operation)!.push(duration);
    };
  }
  
  public getAverageTime(operation: string): number {
    const times = this.metrics.get(operation);
    if (!times || times.length === 0) return 0;
    return times.reduce((sum, time) => sum + time, 0) / times.length;
  }
  
  public getMetrics(): Record<string, number> {
    const result: Record<string, number> = {};
    this.metrics.forEach((times, operation) => {
      result[operation] = this.getAverageTime(operation);
    });
    return result;
  }
  
  public reset(): void {
    this.metrics.clear();
  }
}

// Cache implementation
export class RAGCache {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private config: RAGConfig;
  
  constructor(config: RAGConfig) {
    this.config = config;
  }
  
  public set(key: string, data: any): void {
    if (!this.config.enableCaching) return;
    
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }
  
  public get(key: string): any | null {
    if (!this.config.enableCaching) return null;
    
    const item = this.cache.get(key);
    if (!item) return null;
    
    // Check if cache has expired
    if (Date.now() - item.timestamp > this.config.cacheExpiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }
  
  public clear(): void {
    this.cache.clear();
  }
  
  public size(): number {
    return this.cache.size;
  }
}

// Export singleton instances
export const performanceMonitor = new RAGPerformanceMonitor();
export const ragCache = new RAGCache(getRAGConfig()); 