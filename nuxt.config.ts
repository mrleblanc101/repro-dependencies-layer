import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import ViteSvgLoader from 'vite-svg-loader';

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vueuse/nuxt', '@pinia/nuxt', '@nuxt/icon', '@nuxt/fonts'],
    devtools: { enabled: true },
    colorMode: {
        preference: 'dark',
    },
    future: {
        compatibilityVersion: 4,
    },
    compatibilityDate: '2024-11-01',
    vite: {
        plugins: [
            ViteSvgLoader({
                svgoConfig: {
                    plugins: [
                        'prefixIds',
                        'removeTitle',
                        'removeDesc',
                        'removeDimensions',
                        {
                            name: 'removeAttrs',
                            params: {
                                attrs: '(fill|stroke)',
                            },
                        },
                    ],
                },
                defaultImport: 'url',
            }),
        ],
    },
    eslint: {
        checker: true,
        config: {
            nuxt: {
                sortConfigKeys: true,
            },
        },
    },
    tailwindcss: {
        cssPath: join(currentDir, './app/assets/css/tailwind.css'),
    },
});
