import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b border-blue-600/50 pb-2">Sobre o Projeto</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">A Ideia</h2>
            <p>
              Este chatbot foi criado para ser um ponto central de informações rápidas e atualizadas 
              sobre o time de Counter-Strike da FURIA Esports. A ideia é facilitar o acesso dos fãs 
              a dados como escalação, próximos jogos, resultados recentes e outras curiosidades, 
              tudo em um só lugar e com a "voz" da pantera! 🐺
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Desenvolvimento</h2>
            <p>
              Desenvolvido por Enzo Yukio Chinen utilizando tecnologias modernas como React, 
              Tailwind CSS para estilização, e a poderosa API do Google Gemini para 
              gerar respostas inteligentes e contextuais. O backend foi construído com Node.js e Express.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Para Quem?</h2>
            <p>
              Este projeto é dedicado a todos os torcedores apaixonados da FURIA, especialmente 
              aqueles que acompanham de perto a jornada do time de CS. Seja você um fã de longa data 
              ou alguém que começou a torcer agora, esperamos que este chatbot seja útil e divertido!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 