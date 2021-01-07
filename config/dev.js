// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    baseUrl: '"https://api-dev.hocgin.top"',
    appid: '"touristappid"'
  },
  plugins: [
    ['@tarojs/plugin-mock', {port: 8000}]
  ],
  mini: {},
  h5: {
    esnextModules: ['taro-ui']
  }
}
