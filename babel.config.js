require('dotenv').config()
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
function useLogger() {
  let result = [];
  let offLogger = process.env.USE_LOG !== 'true';
  console.debug(`[${offLogger ? '禁用' : '启用'}]日志打印`);
  if (offLogger) {
    result.push([
      'transform-remove-console',
      {exclude: ['error', 'warn', 'info']},
    ]);
  }
  return result;
}

module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  plugins: [
    ["import", {
      "libraryName": "@antmjs/vantui",
      "libraryDirectory": "es",
      "style": true
    }, "@antmjs/vantui"],
    ...useLogger()
  ]
}
