const baseName = 'base site name'
const baseDesc = 'base site description'
const baseUrl = 'https://example.com'
const baseOgp = '/img/ogp'
const fbID = 999999999

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
    titleTemplate: '%s | ' + baseName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: baseDesc },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: baseName },
      { hid: 'og:description', property: 'og:description', content: baseDesc },
      { hid: 'og:image', property: 'og:image', content: `${baseUrl}${baseOgp}/ogp.jpg` },
      { property: 'fb:app_id', content: fbID },
      // TODO: 以下は検証
      { name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', property: 'twitter:title', content: baseName },
      { name: 'twitter:description', property: 'twitter:description', content: baseDesc },
      { name: 'twitter:image', property: 'twitter:image', content: `${baseUrl}${baseOgp}/ogp.jpg` },
      { name: 'twitter:site', property: 'twitter:site', content: '@mczkzk' },
      { name: 'twitter:creator', property: 'twitter:creator', content: '@mczkzk' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' },
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
  ],
  axios: {
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
