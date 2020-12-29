import Taro from "@tarojs/taro";

export default class Utils {
  static mockSuccess(data) {
    return {
      success: true,
      data: data
    };
  }

  static isSuccess(result) {
    return result && result.success;
  }

  static ifFailShowMessage(result) {
    if (Utils.isSuccess(result)) {
      return true;
    }
    Taro.showToast({title: result?.message, icon: 'none'})
      .then(r => console.debug(r));
    return false;
  }

  static getSystemInfo() {
    let sysInfo = {};

    let res = Taro.getSystemInfoSync();

    sysInfo.WIN_WIDTH = res.screenWidth;
    sysInfo.WIN_HEIGHT = res.screenHeight;
    sysInfo.IS_IOS = /ios/i.test(res.system);
    sysInfo.IS_ANDROID = /android/i.test(res.system);
    sysInfo.STATUS_BAR_HEIGHT = res.statusBarHeight;
    sysInfo.DEFAULT_HEADER_HEIGHT = 46;

    // res.screenHeight - res.windowHeight - res.statusBarHeight
    sysInfo.DEFAULT_CONTENT_HEIGHT = res.screenHeight - res.statusBarHeight - sysInfo.DEFAULT_HEADER_HEIGHT;

    sysInfo.IS_APP = true;
    sysInfo.showAlert = function (options) {
      options.showCancel = false;
      sysInfo.showModal(options);
    };

    sysInfo.showConfirm = function (options) {
      sysInfo.showModal(options);
    };
    return sysInfo;
  }
}
