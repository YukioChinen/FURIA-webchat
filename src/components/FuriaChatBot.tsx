import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FuriaChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage = { sender: 'user', text: trimmedInput };
    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    const historyForBackend = currentMessages.map(msg => ({
        sender: msg.sender,
        text: msg.text
    }));

    try {
      const response = await fetch('https://furia-webchat-backend.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history: historyForBackend,
          message: trimmedInput,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData?.reply || errorData?.error || 'Erro na resposta da API';
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const botReply = data.reply || 'Desculpe, não consegui obter uma resposta.';
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);

    } catch (err: any) {
      console.error("Erro ao buscar resposta do backend:", err);
      const displayError = err.message || 'Falha ao conectar com o servidor.';
      setError(displayError);
      setMessages(prev => [...prev, {
          sender: 'bot', 
          text: `Desculpe, ocorreu um erro: ${displayError}. Tente novamente.`
      }]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        inputRef.current?.focus(); 
      }, 0);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] w-full flex flex-col bg-black text-white font-sans overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-900/80 backdrop-blur-sm p-4 shadow-lg border-b border-blue-600/50 flex items-center justify-center gap-3 z-10"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" 
          alt="FURIA Logo" 
          className="h-8 w-auto filter"
        />
        <span className="text-xl font-bold text-white tracking-wide">FURIA CS ChatBot</span>
      </motion.div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto space-y-3 p-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-black">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                opacity: { duration: 0.2 },
                layout: { type: "spring", bounce: 0.3, duration: 0.3 }
              }}
              className={`flex ${
                msg.sender === 'bot' ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`text-sm p-3 rounded-lg max-w-[75%] shadow-md transition-all duration-300 break-words ${
                  msg.sender === 'bot'
                    ? 'bg-zinc-800 text-gray-200 rounded-bl-none'
                    : 'bg-blue-600 text-white rounded-br-none'
                }`}
              >
                {msg.text.split(/(\s)/).map((part, index) => {
                  const urlRegex = /^(https?|ftp):\/\/([-\w+&@#\/%?=~_|!:,.;]*[-\w+&@#\/%=~_|])/;
                  const match = part.match(urlRegex);
                  
                  if (match) {
                    let url = match[0];
                    let trailingChars = '';

                    while (/[.,!?)(\]\[]$/.test(url)) {
                      trailingChars = url.slice(-1) + trailingChars;
                      url = url.slice(0, -1);
                    }
                    
                    if (url) {
                      return (
                        <span key={index}>
                          <a 
                            href={url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:underline"
                          >
                            {url} 
                          </a>
                          {trailingChars}
                        </span>
                      );
                    } else {
                      part = match[0];
                    }
                  }

                  return (
                    <span key={index}>
                      {part.split('**').map((boldPart, boldIndex) => 
                        boldIndex % 2 === 1 ? <strong key={boldIndex}>{boldPart}</strong> : boldPart
                      )}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
          {isLoading && (
             <motion.div
                key="loading"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ opacity: { duration: 0.2 }, layout: { type: "spring", bounce: 0.3, duration: 0.3 } }}
                className="flex justify-start"
              >
                <div className="text-sm p-3 rounded-lg max-w-[75%] shadow-md bg-zinc-800 text-gray-200 rounded-bl-none flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                </div>
             </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-3 p-4 border-t border-blue-600/50 bg-zinc-900/80 backdrop-blur-sm z-10"
      >
        <input
          ref={inputRef}
          placeholder="Pergunte sobre o time de CS da FURIA..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={isLoading}
          className="flex-1 p-3 bg-zinc-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder-zinc-500 disabled:opacity-50"
        />
        <motion.button
          whileHover={{ scale: isLoading ? 1 : 1.05 }}
          whileTap={{ scale: isLoading ? 1 : 0.95 }}
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Aguarde</span>
            </>
          ) : (
            <>
              <span>Enviar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
}
