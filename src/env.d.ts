/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    VITE_OPENAI_API_KEY: string;
  }
} 