// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    vite: {
        server: {
            watch: {
                usePolling: true,
            },
        },
    },
    runtimeConfig: {
        API_KEY: process.env.API_KEY,
    },
});
