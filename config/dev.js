// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    baseUrl: '"https://api-dev.hocgin.top"',
    appid: '"wx5b633a935cc7c105"'
  },
  plugins: [
    ['@tarojs/plugin-mock', {port: 8000}]
  ],
  mini: {},
  h5: {
    esnextModules: ['taro-ui']
  }
}
