import React, { useState, useEffect, useRef } from 'react';

export default function FuriaChatBot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Fala, fã da FURIA! Em que posso te ajudar hoje? 🐺🔥' },
  ]);
  const [input, setInput] = useState('');
  const [askedForPlayers, setAskedForPlayers] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const botReply = getBotResponse(input);
    setMessages((prev) => [...prev, userMessage, { sender: 'bot', text: botReply }]);
    setInput('');
  };

  const getBotResponse = (message: string): string => {
    const lower = message.toLowerCase();

    if (
      lower.includes('jogadores') ||
      lower.includes('quais são os jogadores?') ||
      lower.includes('quem são os jogadores?')
    ) {
      setAskedForPlayers(true);
      return 'Escolha o jogo para ver os jogadores:\n1. LOL\n2. Valorant\n3. CS2\n4. Rocket League';
    }

    if (askedForPlayers) {
      setAskedForPlayers(false);
      if (lower.includes('lol') || lower.includes('league of legends') || lower.includes('1'))
        return 'Os jogadores de LOL são: Guigo (toplaner), Tatu (Jungler), Tutsz (midlaner), Ayu (adcarry) e JoJo (support).';
      if (lower.includes('valorant') || lower.includes('2'))
        return 'Os jogadores de Valorant são: raafa, heat, havoc, Khalil, pryze e mwzera.';
      if (
        lower.includes('cs2') ||
        lower.includes('counter strike') ||
        lower.includes('cs') ||
        lower.includes('counter strike 2') ||
        lower.includes('3')
      )
        return 'Os jogadores de CS2 são: FalleN, KSCERATO, yuurih, MOLODOY, YEKINDAR, skullz (reserva) e chelo (reserva).';
      if (lower.includes('rocket league') || lower.includes('rl') || lower.includes('4'))
        return 'Os jogadores de Rocket League são: yANXNZ, Lostt, DRUFINHO e STL (coach).';
    }

    if (lower.includes('próximo jogo'))
      return 'O próximo jogo da FURIA é dia 25/04 contra a NAVI, às 18h (BRT).';
    if (lower.includes('conquistas'))
      return 'A FURIA já venceu vários torneios regionais e chegou ao top 3 em Majors!';
    if (lower.includes('quiz'))
      return 'Pergunta: Quem é o IGL da FURIA? (a) arT (b) KSCERATO (c) FalleN';

    return 'Hmm... não entendi muito bem. Pergunte algo como "jogadores", "próximo jogo" ou "conquistas".';
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-900 text-white">
      {/* Header */}
      <div className="bg-zinc-800 text-xl font-semibold p-4 shadow-md text-center">
        FURIA ChatBot 🐺
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm p-2 rounded-xl w-fit max-w-[75%] ${
              msg.sender === 'bot'
                ? 'bg-zinc-800 text-left'
                : 'bg-purple-600 ml-auto text-right'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="flex gap-2 p-4 border-t border-zinc-700">
        <input
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 p-2 bg-zinc-800 text-white rounded-xl outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-purple-700 text-white px-4 py-2 rounded-xl hover:bg-purple-800"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
