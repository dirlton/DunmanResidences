export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
 /* target: 'static',
   router: {
    base: '/dunmanresidences', 
  }, */
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dunman Residences',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dunman Residences brings to life a home amidst nature that offers seclusion, peace, and a lavish expanse in which to unwind in rich splendour. The land lot offers quick access to the city centre and other areas of Singapore as Dakota MRT Station on the Circle Line is less than 100m away. This brand-new, affluent facility in District 15 of Singapore will include plenty of green space in addition to opulent amenities, design-forward buildings, heart-stopping views, and first-rate care facilities. The Dunman Road New Condo is close to the Datoka Circle Line Station (CC8) and is situated near Dunman Road in District 15 of Singapore. When fully developed, the new condo on Dunman Road will have 1,002 residential units available.' },
      {hid: 'keywords', name: 'keywords', content: 'dunman residences, dunman, residences,dunman new launch, launch, new, latest dunman residences'},
      { name: 'format-detection', content: 'telephone=no' },
    ],
  
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://smtpjs.com/v3/smtp.js' },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-flatpickr','@nuxtjs/gtm','@nuxtjs/axios'],
  gtm:{
    id:''
  },
  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    html: {
      minify: {
        removeRedundantAttributes: false,
      },
    },
  },
}
