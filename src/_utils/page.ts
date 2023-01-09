import Taro from "@tarojs/taro";

export enum PageKeys {
  Home = '/pages/index/index',
  Login = '/pages/common/login/index',
}

export class PageKit {

  static GoHome() {
    return Taro.reLaunch({url: PageKeys.Home});
  }


  static GoLogin() {
    return Taro.reLaunch({url: PageKeys.Login});
  }
}
