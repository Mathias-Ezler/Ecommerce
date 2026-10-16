/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_WHATSAPP_PHONE: string;
	readonly PUBLIC_STORE_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
