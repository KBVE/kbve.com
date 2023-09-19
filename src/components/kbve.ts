/* cspell:disable */
/* PUBLIC CONFIGURATIONS */
/* KBVE */
export type kbveLocker = {
	username: string,
    phone: string,
    last: string,
	uuid: string;
	avatar: string,
	github: string,
	instagram: string,
	email: string,
	emailVerification: string,
	phoneVerification: string,
	theme: "dark" | "light" | "auto";
};
export const kbve_v01d: number = 0.99;
export const kbve_v01d_api: string = Object.freeze('');
/* Supabase */
export const supabase_api: string = 'https://haiukcmcljjfaflqdmjc.supabase.co';
export const supabase_projectId: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhaXVrY21jbGpqZmFmbHFkbWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1NTM0MjMsImV4cCI6MjAwNzEyOTQyM30.0taw1sQp2fHLY3byK2cnGtLttXPFRs9GfkxFBNQL6E8";
/* Appwrite */
export const appwrite_api: string = 'https://panel.kbve.com/v1';
export const appwrite_projectId: string = 'kbve';
/* hCaptcha */
export const hcaptcha_site_key: string = 'e77af3f6-a0e3-44b7-82f8-b7c098d38022';
export const hcaptcha_api: string = 'https://js.hcaptcha.com/1/api.js';
/* Rust */
export const rust_cache_api: string = '';
export const rust_worker_api: string = '';
/* PocketBase */
export const pocketbase_data_bank: string = '';
export const pbd = pocketbase_data_bank;
export const pocketbase_proxy: string = '';
export const pbp = pocketbase_proxy;

