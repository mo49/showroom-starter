const baseName = 'base site name'
const baseDesc = 'base site description'
const baseUrl = 'https://example.com'
const baseOgp = '/img/ogp'
const appId = 999999999
const twitterId = '@mczkzk'

export default {
  mode: 'universal',

  env: {
    baseName: baseName,
    baseDesc: baseDesc,
    baseUrl: baseUrl,
    baseOgp: baseOgp,
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    title: baseName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: baseDesc },
      // og
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: baseName },
      { hid: 'og:description', property: 'og:description', content: baseDesc },
      { hid: 'og:image', property: 'og:image', content: `${baseUrl}${baseOgp}/ogp.jpg` },
      { hid: 'fb:app_id', content: appId },
      // twitter
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: baseName },
      { hid: 'twitter:description', property: 'twitter:description', content: baseDesc },
      { hid: 'twitter:image', property: 'twitter:image', content: `${baseUrl}${baseOgp}/ogp.jpg` },
      { hid: 'twitter:site', property: 'twitter:site', content: twitterId },
      { hid: 'twitter:creator', property: 'twitter:creator', content: twitterId },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },



  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  axios: {
  },
  styleResources: {
    scss: [
      '~/assets/sass/_variable.scss',
      '~/assets/sass/_mixin.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
