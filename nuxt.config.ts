// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    "@nuxt/content",
    // "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    // "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/i18n"
  ],
})
