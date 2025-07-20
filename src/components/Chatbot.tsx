import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Chef Illustrator, your personal noodle advisor! 👨‍🍳 What Adobe tool do you use most often? I\'ll recommend the perfect noodle flavor for your creative workflow!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRecommendation = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('photoshop') || message.includes('photo editing') || message.includes('image')) {
      return '🎨 Perfect! For Photoshop users, I highly recommend our **Photoshop Pepper Masala**! Its complex layers of spices mirror the layer system you know and love. The blend adjusts to your taste preferences just like adjustment layers - non-destructively delicious! Plus, the healing spice blend helps fix any "overcooked" moments. Would you like to know more about this flavor or see our current deals?';
    }
    
    if (message.includes('illustrator') || message.includes('vector') || message.includes('design') || message.includes('logo')) {
      return '✏️ Excellent choice! As an Illustrator user, you\'ll absolutely love our **Illustrator Imli**! This tamarind-based masterpiece uses vector-perfect precision in every bite. The sourness scales mathematically from mild to intense, and the flavor anchors are perfectly positioned for maximum taste impact. It\'s as clean and crisp as your bezier curves! Ready to add it to your cart?';
    }
    
    if (message.includes('premiere') || message.includes('video') || message.includes('editing') || message.includes('timeline')) {
      return '🎬 Fantastic! Video editors like you need our **Premiere Pasta**! This revolutionary blend renders in real-time on your palate with smooth flavor transitions that rival your best cuts. No dropped frames in taste - just seamless, timeline-perfect deliciousness. The multi-cam flavor angles let you experience different tastes simultaneously. Want to preview this flavor?';
    }
    
    if (message.includes('after effects') || message.includes('motion') || message.includes('animation')) {
      return '🎭 Amazing! Motion graphics artists deserve our **After Effects Authentic** - it\'s literally explosive! The flavors animate in your mouth with keyframe precision. Watch as the taste compositions transform with each bite, complete with particle effects that pop on your tongue. It\'s like eating a motion graphics masterpiece! Should I add this to your shopping cart?';
    }
    
    if (message.includes('indesign') || message.includes('layout') || message.includes('publishing')) {
      return '📖 Perfect for layout artists! Try our **InDesign Instant** - perfectly formatted flavors that flow from paragraph to paragraph in your mouth. The master page seasonings ensure consistency in every bite, and the text wrap spices adapt to any taste preference. Great for those long layout sessions!';
    }
    
    if (message.includes('creative cloud') || message.includes('multiple') || message.includes('all')) {
      return '☁️ A true creative professional! You need our **Creative Cloud Curry Combo** - it includes flavors from all our Adobe-inspired collection! Photoshop Pepper, Illustrator Imli, Premiere Pasta, and more! Perfect for switch-hitting between different creative tools. Plus, you get cloud storage for your leftover noodles! 😄';
    }
    
    if (message.includes('beginner') || message.includes('new') || message.includes('learning')) {
      return '🌟 Welcome to the creative world! Start with our **Freemium Ramen** - it\'s free and perfect for beginners! Basic flavors that teach you the fundamentals of creative cooking. Once you\'re ready to level up, I\'ll recommend premium flavors based on your interests!';
    }
    
    if (message.includes('spicy') || message.includes('hot')) {
      return '🌶️ You like it hot? Our **Photoshop Pepper Masala** brings the heat with adjustable spice levels! You can mask the intensity or burn through layers of flavor. For extreme heat seekers, try the "Red Channel" variant - it\'s fire!';
    }
    
    if (message.includes('mild') || message.includes('light') || message.includes('subtle')) {
      return '🌿 For subtle tastes, **Illustrator Imli** offers gentle, precise flavors that scale perfectly. Start with the "Outline Mode" - all the flavor structure with lighter intensity. Perfect for sensitive palates!';
    }
    
    // Default responses for general queries
    const defaultResponses = [
      'I\'d love to help you find the perfect noodle! Could you tell me which Adobe tool you use most? Or what kind of flavors you enjoy?',
      'Interesting! Based on what you\'re telling me, I think you might enjoy our signature blends. What\'s your current Adobe workflow like?',
      'Tell me more about your creative process! Are you more into visual design, video editing, or maybe motion graphics?',
      'Great question! To give you the best recommendation, what Adobe software do you spend most of your time in?'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getRecommendation(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Chef Illustrator</h3>
                <p className="text-xs text-red-100">Your Noodle Advisor</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot className="h-4 w-4 mt-0.5 text-red-600" />
                    )}
                    {message.sender === 'user' && (
                      <User className="h-4 w-4 mt-0.5" />
                    )}
                    <div className="text-sm">
                      {message.content.includes('**') ? (
                        <div dangerouslySetInnerHTML={{
                          __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }} />
                      ) : (
                        message.content
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-red-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about noodle recommendations..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;