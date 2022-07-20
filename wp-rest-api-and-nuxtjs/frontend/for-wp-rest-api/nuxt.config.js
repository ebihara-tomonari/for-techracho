import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    host: '0' // デフォルト: localhost
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - for-wp-rest-api',
    title: 'for-wp-rest-api',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/wp-block-library/style'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
          accent: colors.indigo.base, // #3F51B5
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/nuxtjs/'
  },

  router: {
    base: process.env.NODE_ENV == 'production' ? '/for-techracho/wp-rest-api-and-nuxtjs/frontend/for-wp-rest-api/dist/' : '/'
  },

  hooks: {
    'generate:done': async generator => {
      const replace = require('replace-in-file')
      const options = {
        files: 'dist/**/*.html',
        from: 'src="http://localhost/wp-content/uploads',
        to: 'src="/for-techracho/wp-rest-api-and-nuxtjs/frontend/for-wp-rest-api/dist/uploads',
      }
      const results = replace.sync(options);
      console.log('Replacement results:', results);
    }
  }
}
