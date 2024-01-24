// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vue-macros/nuxt', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/font.css'],
  macros: {},
});
