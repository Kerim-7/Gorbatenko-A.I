/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string
  readonly VITE_PHONE_PRIMARY: string
  readonly VITE_PHONE_SECONDARY: string
  readonly VITE_WHATSAPP: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
