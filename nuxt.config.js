export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Yoga Business Coach | Nicole D'Andrea",
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'My mission? To help women in the wellness community stop undervaluing themselves and their businesses.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/rhb6ivy.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/disqus'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/homepage',
    '~/components/layout',
    '~/components/ui',
    '~/components/app',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: 'memory',
      },
    ],
    ['@nuxtjs/markdownit', { html: true, injected: true }],
    ['@nuxtjs/gtm'],
    ['vue-plausible'],
  ],

  gtm: {
    id: 'G-C2MVCQTW9V',
  },

  plausible: {
    domain: 'nicoledandreaconsulting.com',
    hashMode: true,
    trackLocalhost: false,
    piHost: 'https://plausible.io',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
