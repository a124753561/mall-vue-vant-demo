const path = require('path')

function resolve(_dir = '') {
  return path.join(__dirname, './src', _dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 6254
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  configureWebpack: {
    resolve: {
      alias: {
        core: resolve('core')
      }
    },
    optimization: {
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      },
      splitChunks: {
        minChunks: 2,
        minSize: 20000,
        maxAsyncRequests: 20,
        maxInitialRequests: 30,
        name: false
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/_var.scss";'
      }
    }
  }
}
