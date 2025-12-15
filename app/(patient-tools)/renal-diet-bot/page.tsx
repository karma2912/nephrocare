'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function DietBotPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! I am your NephroCare Diet Assistant. I can help you find low-potassium recipes or check if a food is safe for your stage of CKD. What can I do for you today?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: 'user', text: input } as const];
    setMessages(newMessages);
    setInput('');

    // Simulate Bot Response
    setTimeout(() => {
        setMessages(prev => [...prev, { 
            role: 'bot', 
            text: "That's a great question about your renal diet. Generally, you should look for low-sodium alternatives. Let me pull up a specific recipe..." 
        }]);
    }, 1000);
  };

  const suggestions = ["Is banana safe?", "Low sodium dinner ideas", "How much water today?"];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4 sticky top-20 z-10">
         <Link href="/" className="text-slate-400 hover:text-slate-600">
            <ChevronLeft size={24} />
         </Link>
         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <Sparkles size={20} />
         </div>
         <div>
            <h1 className="font-bold text-slate-900">Renal Diet Bot</h1>
            <p className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> Online
            </p>
         </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 max-w-3xl mx-auto w-full p-6 space-y-6">
        {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center shrink-0
                    ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}
                `}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`
                    p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-sm
                    ${msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'}
                `}>
                    {msg.text}
                </div>
            </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t border-slate-200 sticky bottom-0">
         <div className="max-w-3xl mx-auto">
             {/* Quick Suggestions */}
             <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {suggestions.map(s => (
                    <button 
                        key={s} 
                        onClick={() => setInput(s)}
                        className="whitespace-nowrap px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-600 font-medium transition-colors"
                    >
                        {s}
                    </button>
                ))}
             </div>

             <div className="relative flex items-center">
                 <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about food, fluids, or recipes..."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-full pl-6 pr-14 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                 />
                 <button 
                    onClick={handleSend}
                    className="absolute right-2 p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
                 >
                    <Send size={20} />
                 </button>
             </div>
             <p className="text-center text-[10px] text-slate-400 mt-2">
                AI can make mistakes. Always consult your nutritionist.
             </p>
         </div>
      </div>
    </div>
  );
}