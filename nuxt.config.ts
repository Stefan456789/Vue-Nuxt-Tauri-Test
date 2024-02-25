// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    '@tresjs/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/devtools'
  ],
  tres: {
    devtools: true
  }
})
