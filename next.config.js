const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = {
    publicRuntimeConfig: {
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID
    },
    pwa: {
      dest: 'public',
      register: true,
      scope: '/',
      runtimeCaching,
    },
    async redirects() {
      return [
        {
          source: '/2021/um-ensaio-sobre-a-marca-da-besta/',
          destination: '/um-ensaio-sobre-a-marca-da-besta/',
          permanent: true,
        },
        {
          source: '/2020/editorial/bem-vindoa-ao-teoleigo/',
          destination: '/bem-vindoa-ao-teoleigo/',
          permanent: true,
        },
        {
          source: '/2020/literatura-e-cristianismo/depravacao-total-graca-e-misericordia-em-robinson-crusoe/',
          destination: '/literatura-e-cristianismo/depravacao-total-graca-e-misericordia-em-robinson-crusoe/',
          permanent: true,
        }
      ]
    },
}