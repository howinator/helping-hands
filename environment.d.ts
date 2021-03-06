import ts from 'typescript';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      DB_PASSWORD: string;
      DB_USER: string;
      DB_NAME: string;
      DB_PORT: string;
      DB_HOST: string;
    }
  }
}