'use strict'
const config = require('../config')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: config.build.assetsRoot,
      outputDir: config.build.prerenderAssetsRoot,
      routes: [ '/education/lecture/8', '/education/lecture' ],
      renderer: new Renderer({
        renderAfterTime: 5000
      }),
      server : {
        proxy: config.build.prerenderProxyTable
      }
    })
  ]
}
