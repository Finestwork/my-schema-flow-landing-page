// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Welcome to MySchemaFlow! Your database schema visualizer',
      meta: [
        {
          name: 'description',
          content: 'MySchemaFlow is a database schema visualizer',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          type: 'image/x-icon',
          href: '/icons/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png',
          href: '/icons/favicon-16x16.png',
        },
        {
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
          href: '/icons/favicon-32x32.png',
        },
        {
          rel: 'mask-icon',
          color: '#686868',
          href: '/icons/safari-pinned-tab.svg',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ['@vue-macros/nuxt', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/font.css'],
});
