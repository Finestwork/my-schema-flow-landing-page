// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Welcome to MySchemaFlow! Your database schema visualizer',
      meta: [
        {
          name: 'canonical',
          content: '/localhost',
        },
        {
          name: 'description',
          content:
            'MySchemaFlow allows you to create visual representations of your database schema, making it easier to understand the relationships between tables, columns, and data types.',
        },
        {
          name: 'keywords',
          content:
            'database schema, data visualization, database visualizer made with vue.js and electron.js, database management, mysql database visualizer',
        },

        // Open Graph
        {
          name: 'og:title',
          content: 'Welcome to MySchemaFlow! Your database schema visualizer',
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: '/localhost',
        },
        {
          name: 'og:image',
          content: '/images/open-graph.png',
        },
        {
          name: 'og:site_name',
          content: 'MySchemaFlow',
        },
        {
          name: 'og:description',
          content:
            'MySchemaFlow allows you to create visual representations of your database schema, making it easier to understand the relationships between tables, columns, and data types.',
        },

        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Welcome to MySchemaFlow! Your database schema visualizer',
        },
        {
          name: 'twitter:description',
          content:
            'MySchemaFlow allows you to create visual representations of your database schema, making it easier to understand the relationships between tables, columns, and data types.',
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
