import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Brain, BookOpen, Lightbulb, RefreshCw } from 'lucide-react';
import { ragEngine, RAGResponse, ConversationContext } from '../utils/ragEngine';

interface Message {
  id: string;
  from: 'user' | 'bot';
  text: string;
  timestamp: number;
  sources?: any[];
  confidence?: number;
  suggestedActions?: string[];
}

const RAGChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      from: 'bot',
      text: '👋 Hello! I\'m your AI-powered SR Sewing World Assistant. I can help you with machine recommendations, service inquiries, repairs, and more using our comprehensive knowledge base. What can I help you with today?',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(`session-${Date.now()}`);
  const [showSources, setShowSources] = useState(false);
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

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMessage = input.trim();
    const userMessageId = `user-${Date.now()}`;
    
    // Add user message
    setMessages(msgs => [...msgs, {
      id: userMessageId,
      from: 'user',
      text: userMessage,
      timestamp: Date.now()
    }]);
    
    setInput('');
    setLoading(true);
    
    try {
      // Process query with RAG engine
      const response: RAGResponse = await ragEngine.processQuery(userMessage, sessionId);
      
      // Add bot response
      const botMessageId = `bot-${Date.now()}`;
      setMessages(msgs => [...msgs, {
        id: botMessageId,
        from: 'bot',
        text: response.answer,
        timestamp: Date.now(),
        sources: response.sources,
        confidence: response.confidence,
        suggestedActions: response.suggestedActions
      }]);
      
    } catch (error) {
      console.error('Error processing query:', error);
      
      // Add error message
      setMessages(msgs => [...msgs, {
        id: `error-${Date.now()}`,
        from: 'bot',
        text: 'I apologize, but I encountered an error processing your request. Please try again or contact our support team for assistance.',
        timestamp: Date.now()
      }]);
    } finally {
      setLoading(false);
    }

    // Refocus the input after sending
    inputRef.current?.focus();
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    setTimeout(() => handleSend(), 100);
  };

  const handleClearConversation = () => {
    ragEngine.clearConversation(sessionId);
    setMessages([{
      id: '1',
      from: 'bot',
      text: '👋 Hello! I\'m your AI-powered SR Sewing World Assistant. I can help you with machine recommendations, service inquiries, repairs, and more using our comprehensive knowledge base. What can I help you with today?',
      timestamp: Date.now()
    }]);
    setShowSources(false);
  };

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.7) return 'text-green-600';
    if (confidence >= 0.4) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 0.7) return 'High confidence';
    if (confidence >= 0.4) return 'Medium confidence';
    return 'Low confidence';
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white p-4 rounded-full shadow-xl flex items-center justify-center"
        onClick={() => setOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        aria-label="Open AI chat bot"
        style={{ boxShadow: '0 8px 32px rgba(255,65,108,0.25)' }}
      >
        <motion.div
          animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        >
          <MessageSquare className="h-7 w-7" />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-[#ff416c]/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white">
              <span className="font-bold text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5" /> AI Assistant
              </span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={handleClearConversation}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Clear conversation"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setOpen(false)} 
                  aria-label="Close chat" 
                  className="hover:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto bg-gradient-to-br from-white via-[#fff6f6] to-[#f9f6ff]" style={{ minHeight: 400, maxHeight: 500 }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ x: msg.from === 'user' ? 80 : -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="max-w-[85%]">
                    <div
                      className={`px-4 py-3 rounded-2xl shadow-md text-sm font-medium ${
                        msg.from === 'user'
                          ? 'bg-[#ff416c] text-white rounded-br-sm'
                          : 'bg-white text-gray-800 border border-[#ff416c]/10 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    
                    {/* Message metadata */}
                    <div className={`flex items-center justify-between mt-1 text-xs text-gray-500 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <span>{formatTimestamp(msg.timestamp)}</span>
                      {msg.from === 'bot' && msg.confidence !== undefined && (
                        <span className={`ml-2 ${getConfidenceColor(msg.confidence)}`}>
                          {getConfidenceText(msg.confidence)}
                        </span>
                      )}
                    </div>

                    {/* Sources and suggested actions for bot messages */}
                    {msg.from === 'bot' && (msg.sources?.length || msg.suggestedActions?.length) && (
                      <div className="mt-2 space-y-2">
                        {/* Sources */}
                        {msg.sources && msg.sources.length > 0 && (
                          <div className="bg-blue-50 rounded-lg p-2">
                            <div className="flex items-center gap-1 text-xs text-blue-700 font-medium mb-1">
                              <BookOpen className="h-3 w-3" />
                              Sources ({msg.sources.length})
                            </div>
                            <div className="text-xs text-blue-600 space-y-1">
                              {msg.sources.slice(0, 2).map((source, idx) => (
                                <div key={idx} className="flex items-start gap-1">
                                  <span className="text-blue-500">•</span>
                                  <span className="capitalize">{source.type}: {source.content.split(':')[0]}</span>
                                </div>
                              ))}
                              {msg.sources.length > 2 && (
                                <div className="text-blue-500 text-xs">
                                  ... and {msg.sources.length - 2} more sources
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Suggested Actions */}
                        {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {msg.suggestedActions.map((action, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleQuickAction(action)}
                                className="px-2 py-1 text-xs bg-[#ff416c]/10 text-[#ff416c] rounded-full hover:bg-[#ff416c]/20 transition-colors border border-[#ff416c]/20"
                              >
                                {action}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="px-4 py-3 rounded-2xl shadow-md bg-white border border-[#ff416c]/10 text-gray-800 text-sm font-medium animate-pulse flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#ff416c] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#ff416c] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-[#ff416c] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span>AI is thinking...</span>
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
                  <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <Lightbulb className="h-3 w-3" />
                    Quick actions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Tell me about JACK F5",
                      "Service inquiry", 
                      "Compare machines",
                      "Warranty information"
                    ].map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickAction(action)}
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
                placeholder="Ask me anything about sewing machines..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                ref={inputRef}
              />
              <button
                type="submit"
                className="p-2 rounded-full bg-[#ff416c] hover:bg-[#ff4b2b] text-white transition-colors disabled:opacity-50"
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

export default RAGChatBot; 