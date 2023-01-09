// eslint-disable-next-line import/no-commonjs
let isH5 = process.env.TARO_ENV === 'h5';

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    baseUrl: `"http://127.0.0.1:${isH5 ? '8000' : '8888'}/api"`,
  },
  plugins: [
    '@tarojs/plugin-html',
    ['@tarojs/plugin-mock', {port: 8888}]
  ],
  mini: {},
  h5: {
    esnextModules: ['taro-ui'],
    devServer: {
      open: false,
      port: 8000,
      host: "0.0.0.0",
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8888',
          changeOrigin: true,
          pathRewrite: {'^/api': '/api'},
        }
      }
    }
  }
}
