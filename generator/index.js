module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      'build-testing': 'vue-cli-service build --mode testing'
    },
    dependencies: {
      axios: '^0.27.2'
    },
    devDependencies: {
      'compression-webpack-plugin': '^10.0.0',
      'unplugin-vue-components': '^0.22.4'
    }
  })

  if (options.module === 'pc') {
    api.extendPackage({
      dependencies: {
        'element-plus': '^2.2.13'
      },
      devDependencies: {
        'unplugin-auto-import': '^0.11.1'
      }
    })
  } else if (options.module === 'mobile') {
    api.extendPackage({
      dependencies: {
        'amfe-flexible': '^2.2.1',
        vant: '^3.6.0'
      },
      devDependencies: {
        postcss: '^8.4.16',
        'postcss-pxtorem': '^6.0.0'
      }
    })
  }

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  if (options.module === 'pc') {
    api.render('../template-pc')
  } else if (options.module === 'mobile') {
    api.render('../template-mobile')
  }

  api.render((files, render) => {
    delete files['src/views/AboutView.vue']
    delete files['src/components/HelloWorld.vue']
  })
}

