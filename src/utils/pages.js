import Taro from "@tarojs/taro";

export const PageKey = {
  INDEX_PAGE: '/pages/index/index',
  APPLY_PAGE: '/pages/common/apply/index',
  USER_PAGE: '/pages/common/user/index',
};

let onCatch = e => console.error(e);
export default class Pages {

  static gotoUser() {
    return this.goto(PageKey.USER_PAGE)
      .catch(onCatch);
  }

  static gotoApply() {
    return this.goto(PageKey.APPLY_PAGE)
      .catch(onCatch);
  }

  static goto(url) {
    return Taro.navigateTo({url})
      .catch(onCatch);
  }

  static goBack() {
    return Taro.navigateBack({})
      .catch(onCatch);
  }

  static goHome() {
    return Taro.reLaunch({url: PageKey.INDEX_PAGE})
      .catch(onCatch);
  }
};
