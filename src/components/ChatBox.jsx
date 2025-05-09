import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';

const EXAMPLE_QUESTIONS = [
  "How do I sell my license?",
  "Can I transfer my software license?",
  "Is there a fee to list a product?",
  "What license types can be resold?",
  "How long does the selling process take?",
  "Can I sell an unused product key?",
  "Do I need proof of ownership to sell?",
];

const getRandomQuestion = () => {
  const index = Math.floor(Math.random() * EXAMPLE_QUESTIONS.length);
  return EXAMPLE_QUESTIONS[index];
};

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([{ role: 'system', text: 'Hi! Ask me anything.' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(getRandomQuestion());
  const [suggestionVisible, setSuggestionVisible] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages([...messages, userMessage]);
    setIsLoading(true);
    setSuggestionVisible(false); // Hide suggestion after first message

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { role: 'bot', text: data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Error connecting to server.' }]);
    } finally {
      setIsLoading(false);
    }

    setInput('');
  };

  return (
    <div className="fixed bottom-20 right-5 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-96 max-h-[500px] flex flex-col z-50 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <MessageSquare className="text-blue-500 w-5 h-5" />
          <h2 className="font-bold text-lg text-gray-800">Live Chat</h2>
        </div>
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-red-500 rounded-full p-1 hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-3 pr-1 scroll-smooth">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`animate-fadeIn flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] px-3 py-2 rounded-lg ${
                msg.role === 'user' 
                  ? 'bg-blue-500 text-white rounded-br-none' 
                  : msg.role === 'system'
                    ? 'bg-gray-200 text-gray-800 rounded-tl-none'
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Suggestion under system message */}
        {suggestionVisible && (
          <div className="flex justify-start animate-fadeIn">
            <div
              onClick={() => setInput(suggestion)}
              className="cursor-pointer bg-blue-50 border border-blue-100 text-blue-600 text-sm px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 max-w-[85%]"
            >
              💡 <span className="underline">Try asking: "{suggestion}"</span>
            </div>
          </div>
        )}

        {/* Loading animation */}
        {isLoading && (
          <div className="flex justify-start animate-fadeIn">
            <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg rounded-tl-none max-w-[85%]">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 transition-all duration-200"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button 
          onClick={sendMessage} 
          disabled={!input.trim() || isLoading}
          className={`bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-200 ${
            !input.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
