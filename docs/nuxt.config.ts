// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@paper-ui/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  ssr: false,
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    },
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
  nitro: {
    prerender: {
      failOnError: false, // Não interrompe o build em erros de prerender
    },
  },
  debug: true,
  compatibilityDate: '2024-04-03',
})
