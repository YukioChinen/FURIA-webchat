# FURIA-webchat-frontend

Este é o front-end de um desafio técnico para uma vaga de estágio. O projeto consiste em uma interface web interativa que utiliza um chatbot especializado na organização de e-sports FURIA.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas no front-end.
- **Tailwind CSS**: Framework para estilização.
- **Framer Motion**: Biblioteca para animações.
- **Vite**: Ferramenta para desenvolvimento e build do projeto.
- **TypeScript**: Superset do JavaScript para tipagem estática.

## 📋 Funcionalidades

- **Interface amigável**: Design moderno e responsivo com a temática da FURIA.
- **Chatbot integrado**: Comunicação com o back-end para respostas em tempo real.
- **Navegação intuitiva**: Páginas dedicadas para Home, ChatBot e Sobre o Projeto.
- **Animações suaves**: Experiência de usuário aprimorada com transições animadas.

## 📂 Estrutura do Projeto
```
FURIA-webchat-frontend/
├── src/
│   ├── components/ # Componentes reutilizáveis
│   │   ├── FuriaChatBot.tsx # Componente do chatbot
│   │   └── NavBar.tsx # Barra de navegação
│   ├── config/ # Configurações
│   │   └── openai.ts # Configuração da API OpenAI
│   ├── pages/ # Páginas do projeto
│   │   ├── HomePage.tsx # Página inicial
│   │   └── AboutPage.tsx # Página sobre o projeto
│   ├── App.tsx # Componente principal
│   ├── main.tsx # Ponto de entrada do React
│   └── index.css # Estilos globais
├── index.html # Arquivo HTML principal
├── tailwind.config.cjs # Configuração do Tailwind CSS
├── postcss.config.cjs # Configuração do PostCSS
└── package.json # Dependências e scripts do projeto
```

## 🔧 Configuração e Execução

### Pré-requisitos

- Node.js instalado na máquina.
- Back-end configurado e em execução.

### Passos para executar o projeto

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd FURIA-webchat-frontend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   VITE_OPENAI_API_KEY=SuaChaveDeAPI
   ```

4. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

5. Acesse o front-end em `http://localhost:5173`.

## 🌐 Rotas

- `/`: Página inicial com informações sobre o chatbot.
- `/chat`: Página do chatbot para interação com a IA.
- `/sobre`: Página com detalhes sobre o projeto.

## ⚠️ Observações

- Certifique-se de que o back-end está em execução para que o chatbot funcione corretamente.
- O front-end foi projetado para se comunicar com o back-end na porta `5001`.

## 🖤 Sobre a FURIA

A FURIA é uma das maiores organizações de e-sports do Brasil, com equipes em diversas modalidades como CS2 e Valorant. Este projeto foi desenvolvido com o objetivo de criar uma experiência interativa para os fãs da organização.

---

**Desenvolvido como parte de um desafio técnico.**