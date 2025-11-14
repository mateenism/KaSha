import React, { useState, useEffect, useRef } from 'react';
import { XIcon, SendIcon, BotIcon } from './icons';
import { GoogleGenAI, Chat } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface AiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiChatModal: React.FC<AiChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the KaSha AI Assistant. How can I help you with your event planning today? You can ask me about our services, get event ideas, or ask for a cost estimate." }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize the chat session
  useEffect(() => {
    if (isOpen) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const chatSession = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: `You are "KaSha AI Assistant", a friendly and helpful virtual assistant for KaSha, a luxury event management company in India. 
            Your goal is to assist users with their event planning needs. Be professional, knowledgeable, and elegant in your responses.
            - Provide information about KaSha's services (Weddings, Corporate Events, Concerts, etc.).
            - Offer creative ideas for different types of events.
            - Help users with preliminary cost estimations based on their needs.
            - Guide users on how to contact KaSha for a detailed consultation.
            - Keep your answers concise and helpful.
            - Do not answer questions unrelated to event planning or KaSha.
            Company Info: KaSha, Pan-India services, based in Delhi. Contact: info@kasha.co.in or phone numbers +91 9810987169, +91 9720588808.
            `,
          },
        });
        setChat(chatSession);
      } catch (error) {
        console.error("Failed to initialize GenAI Chat:", error);
        setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I am unable to connect at the moment. Please try again later.' }]);
      }
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: userInput });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = { role: 'model', text: 'Oops! Something went wrong. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-brand-light dark:bg-brand-dark w-full max-w-lg rounded-lg shadow-2xl flex flex-col h-[70vh] animate-fadeIn">
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-brand-dark-secondary">
          <div className="flex items-center space-x-3">
            <BotIcon className="w-6 h-6 text-brand-gold" />
            <h2 className="text-xl font-serif text-brand-dark dark:text-brand-light">KaSha AI Assistant</h2>
          </div>
          <button onClick={onClose} className="text-brand-gray hover:text-brand-dark dark:hover:text-brand-light">
            <XIcon className="w-6 h-6" />
          </button>
        </header>

        <main className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start space-x-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'model' && (
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <BotIcon className="w-6 h-6 text-brand-gold" />
                </div>
              )}
              <div 
                className={`p-3 rounded-lg max-w-xs md:max-w-md ${msg.role === 'user' 
                  ? 'bg-brand-gold text-brand-dark' 
                  : 'bg-brand-light-secondary dark:bg-brand-dark-secondary text-brand-dark dark:text-brand-light'}`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                  <BotIcon className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="bg-brand-light-secondary dark:bg-brand-dark-secondary p-3 rounded-lg flex items-end h-[40px]">
                  <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-brand-gold rounded-full animate-typing-bounce" style={{ animationDelay: '0s' }}></span>
                      <span className="w-2 h-2 bg-brand-gold rounded-full animate-typing-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-brand-gold rounded-full animate-typing-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </main>

        <footer className="p-4 border-t border-gray-200 dark:border-brand-dark-secondary">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input 
              type="text" 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..." 
              disabled={isLoading}
              className="w-full p-3 bg-brand-light-secondary dark:bg-brand-dark-secondary border border-gray-300 dark:border-brand-dark-secondary rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-dark dark:text-brand-light disabled:opacity-50"
            />
            <button type="submit" disabled={isLoading || !userInput.trim()} className="bg-brand-gold text-brand-dark p-3 rounded-sm hover:bg-yellow-500 transition-colors disabled:bg-brand-gold/50 disabled:cursor-not-allowed">
              <SendIcon className="w-6 h-6" />
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default AiChatModal;