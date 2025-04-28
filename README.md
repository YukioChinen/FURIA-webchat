# FURIA-webchat-frontend

Este é o front-end de um desafio técnico. O projeto consiste em uma interface web interativa que utiliza um chatbot especializado na organização de e-sports FURIA.

**Links Úteis:**
- **Repositório do Código:** [FURIA Webchat Frontend](https://github.com/YukioChinen/FURIA-webchat-frontend)
- **Repositório do Backend:** [FURIA Webchat Backend](https://github.com/YukioChinen/FURIA-webchat-backend)
- **Site Online (Vercel):** [FURIA Chatbot](https://furia-webchat-frontend.vercel.app/)

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas no front-end.
- **Tailwind CSS**: Framework para estilização.
- **Framer Motion**: Biblioteca para animações.
- **Vite**: Ferramenta para desenvolvimento e build do projeto.
- **TypeScript**: Superset do JavaScript para tipagem estática.

## 📋 Funcionalidades

- **Interface amigável**: Design moderno e responsivo com a temática da FURIA.
- **Chatbot integrado**: Comunicação com o back-end (hospedado no Render) para respostas em tempo real.
- **Navegação intuitiva**: Páginas dedicadas para Home, ChatBot e Sobre o Projeto.
- **Animações suaves**: Experiência de usuário aprimorada com transições animadas.

## 📂 Estrutura do Projeto
```
FURIA-webchat-frontend/
├── src/
│   ├── components/
│   │   ├── FuriaChatBot.tsx
│   │   └── NavBar.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── AboutPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── index.html
├── tailwind.config.cjs
├── postcss.config.cjs
└── package.json
```

## 🔧 Configuração e Execução Local (Opcional)

### Pré-requisitos

- Node.js instalado na máquina.

### Passos para executar o projeto localmente

1. Clone o repositório:
   ```
   git clone https://github.com/YukioChinen/FURIA-webchat-frontend
   cd FURIA-webchat-frontend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e configure a variável de ambiente para apontar para o backend:
   ```
   # Exemplo, use a URL correta do backend no Render
   VITE_API_URL=https://your-backend-url.onrender.com 
   ```

4. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

5. Acesse o front-end em `http://localhost:5173` (ou a porta indicada pelo Vite).

## 🌐 Rotas

- `/`: Página inicial com informações sobre o chatbot.
- `/chat`: Página do chatbot para interação com a IA.
- `/sobre`: Página com detalhes sobre o projeto.

## ⚠️ Observações

- O chatbot necessita que o back-end (hospedado no Render) esteja acessível e em execução para funcionar corretamente. A URL do backend é configurada via variável de ambiente `VITE_API_URL`.

## 🖤 Sobre a FURIA

A FURIA é uma das maiores organizações de e-sports do Brasil, com equipes em diversas modalidades como CS2 e Valorant. Este projeto foi desenvolvido com o objetivo de criar uma experiência interativa para os fãs da organização.

---

**Desenvolvido como parte de um desafio técnico.**
