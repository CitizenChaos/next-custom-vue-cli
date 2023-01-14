const { defineConfig } = require('@vue/cli-service')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// 公共地址、端口号
let publicPath = '/index/'
let port = 10030

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
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
  },
  productionSourceMap: false
})
