// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    baseUrl: '"https://api-dev.hocgin.top"',
    appid: '"wx2388ca4e8e51be62"'
  },
  plugins: [
    ['@tarojs/plugin-mock', {port: 8000}]
  ],
  mini: {},
  h5: {
    esnextModules: ['taro-ui']
  }
}
