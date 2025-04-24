import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-black text-white p-8">
      <img 
        src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" 
        alt="FURIA Logo" 
        className="h-24 w-auto mb-8 filter"
      />
      <h1 className="text-4xl font-bold mb-4 text-center">Bem-vindo ao FURIA CS ChatBot!</h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
        Converse com nossa IA especializada e tire suas dúvidas sobre o time de Counter-Strike da FURIA.
        Resultados, escalação, próximos jogos e muito mais!
      </p>
      
      <div className="space-y-4 text-center mb-8">
        <h2 className="text-2xl font-semibold">Principais Benefícios:</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Respostas instantâneas sobre o time de CS.</li>
          <li>Informações atualizadas (conforme contexto da IA).</li>
          <li>Interface amigável e temática da FURIA.</li>
          <li>Disponível 24/7.</li>
        </ul>
      </div>

      <Link 
        to="/chat"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black transition-colors duration-300 text-lg"
      >
        Iniciar Chat
      </Link>
    </div>
  );
} 