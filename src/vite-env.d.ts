/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string; // Required variable
  readonly VITE_API_KEY?: string; // Optional variable
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
