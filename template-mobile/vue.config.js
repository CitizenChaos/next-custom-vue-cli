const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

// 公共地址、端口号
const publicPath = '/index/'
const port = 10030

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      }),
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  devServer: {
    port,
    open: false,
    proxy: {
      '/example': {
        target: 'http://xxx.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/example': '/'
        }
      }
    }
  }
})
