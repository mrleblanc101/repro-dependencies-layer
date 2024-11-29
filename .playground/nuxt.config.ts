import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
    extends: ['..'],
    modules: ['@nuxt/eslint'],
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-11-01',
    eslint: {
        config: {
            // Use the generated ESLint config for lint root project as well
            rootDir: fileURLToPath(new URL('..', import.meta.url)),
        },
    },
});
