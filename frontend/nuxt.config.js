const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "57x57", href: "/icons/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/icons/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/icons/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/icons/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/icons/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/icons/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/icons/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/icons/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-icon-180x180.png" },
      { rel: "icon", type: "image/png", sizes: "192x192",  href: "/icons/android-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/icons/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" },
      { rel: "manifest", href: "/icons/manifest.json" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#681768' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/routerBeforeEach",
    "~/plugins/portal-vue",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-buefy',
    ['nuxt-sass-resources-loader', '@/assets/scss/main.scss'],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

global.File = typeof window === 'undefined' ? Object : window.File
