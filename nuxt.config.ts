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
            // Default theme (same as single string)
            default: 'aurora-x',
            // Theme used if `html.dark`
            dark: 'aurora-x',
            // Theme used if `html.sepia`
            sepia: 'aurora-x'
          }
        }
      }
    }
  },
  devtools: { enabled: true }
})