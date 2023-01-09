export default {
  pages: [
    'pages/common/login/index',
    'pages/index/index',
    'pages/tpl/index',
    // 'pages/test/index',
    // 通用组件
    // 'pages/common/verify/index',
    // 'pages/common/login/qrcode/index',
    // 'pages/common/user/index',
    // 'pages/common/user/detail/index',
    'pages/common/webview/index',
    // 'pages/common/message/index',
    // 自定义组件
    // 'pages/avatar/index',
  ],
  // tabBar: {
  //   custom: true,
  //   list: [{
  //     text: '首页',
  //     iconPath: 'assets/icon.png',
  //     selectedIconPath: 'assets/icon.png',
  //     pagePath: 'pages/index/index'
  //   }, {
  //     text: '首页2',
  //     iconPath: 'assets/icon.png',
  //     selectedIconPath: 'assets/icon.png',
  //     pagePath: 'pages/common/verify/index'
  //   }]
  // },
  subpackages: [],
  window: {
    navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
};
