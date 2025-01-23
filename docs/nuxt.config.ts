// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@paper-ui/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  ssr: false,
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
})
