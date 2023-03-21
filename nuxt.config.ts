// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://aframe.io/releases/0.7.1/aframe.min.js'
        }
      ]
    }
  },
  
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    "@nuxt/content",
    // "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    // "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/i18n"
  ],

  css: [
    '~/assets/scss/_main.scss'
  ],
})
