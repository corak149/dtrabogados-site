/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WHATSAPP?: string;
  readonly PUBLIC_TALLY_URL?: string;
  readonly PUBLIC_INSTAGRAM?: string;
  readonly PUBLIC_GOOGLE_REVIEWS_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
