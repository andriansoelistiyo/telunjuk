
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'id'
    },
    title: process.env.npm_package_name || 'Telunjuk.com - Bandingkan harga dari beragam toko online di Indonesia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'theme-color', content: '#be1e2d' },
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js', async: true },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/tjk-favicon.ico' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,900;1,300&display=swap' },
      // { rel: 'preload', as: 'style', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' },
      { rel: 'preconnect', href: 'https://www.google.com' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/main.css',
    '@/assets/styles/slick-custom.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/jsonld.js'},
    { src: '~/plugins/lazyload', mode: 'client' },
    { src: '~/plugins/facebook-pixel.js', mode: 'client'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: false,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    [
      'nuxt-i18n',
      {
        vueI18n: {
          numberFormats: {
            id: {
              currency: {
                style: 'currency',
                currency: 'IDR'
              }
            }
          }
        }
      }
    ],
    ['@nuxtjs/google-analytics', {
      id: 'UA-9216037-1',
      // debug: {
      //   enabled: true, // default value
      //   trace: false, // default value
      //   sendHitTask: true // default value
      // },
      autoTracking: {
        pageviewTemplate: route => {
          return {
            page: route.path,
            title: document.title,
            location: window.location.href,
          };
        },
      },
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    ['bootstrap-vue/nuxt'],
    ['@nuxtjs/axios'],
    ['@nuxtjs/device'],
    ['@nuxtjs/moment'],
    ['@nuxtjs/auth'],
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60
      }
    ],
    ['cookie-universal-nuxt'],
    [
      'nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }
    ]
  ],
  auth: {
    localStorage: false,
    strategies: {
      local: {
        endpoints: {
          login: false,
          logout: false,
          user: { url: 'http://telunjuk-user-devel.telunjuk.com/api/auth/user', method: 'get', propertyName: 'data' }
        },
        tokenRequired: false,
        tokenType: false,
        // globalToken: false,
        // autoFetchUser: false
      }
    }
  },
  bootstrapVue: {
    icons: false, // Install the IconsPlugin (in addition to BootStrapVue plugin
    bootstrapVueCSS: false
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, { isDev, isClient, isServer }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
    },
    optimization: {
      minimize: true,
      removeEmptyChunks: true
    },
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    },
    watch: ['~/.nuxt/', '~/node_modules/'],
    cache: true
  },
  vue: {
    performance: true,
    config: {
      productionTip: false,
      devtools: true
    }
  },
  axios: {
    /*
     * Set API_URL environment variable to configure access to the API
    */
    baseURL: process.env.API_URL || 'http://telunjuk-backend-devel.telunjuk.com/api/'
  },
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
}
