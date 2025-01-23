// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  modules: [
    '@paper-ui/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxthub/core'
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
          }
        }
      }
    }
  },
  devtools: { enabled: true }
})