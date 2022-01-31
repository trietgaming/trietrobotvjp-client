/* eslint-disable */

interface ImportMetaEnv {
  readonly VITE_DISCORD_OAUTH2_URL: string;
  readonly VITE_FACEBOOK_OAUTH2_URL: string;
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_AUTH_DOMAIN: string;
  readonly VITE_PROJECT_ID: string;
  readonly VITE_STORAGE_BUCKET: string;
  readonly VITE_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_ID: string;
  readonly VITE_MEASUREMENT_ID: string;
  readonly VITE_CAPTCHA_KEY: string;
  readonly VITE_BACKEND_URL: string;
  readonly VITE_DISCORD_LINKING_URL: string;
  readonly VITE_FACEBOOK_LINKING_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
