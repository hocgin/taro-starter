import {StorageKit, StorageKeys, EventKit, PageKit} from "@/_utils";
import Taro from "@tarojs/taro";
import AppService from "@/services/app";

interface UserInfo {
  token: string;
  avatarUrl: string;
  nickname: string;
  username: string;
}

export default class Global {
  static reloadUserInfo(token: string) {
    Global.setUserInfo({token} as any);
    AppService.getCurrentUser().then((data) => {
      Global.setUserInfo({
        token,
        avatarUrl: data?.avatar,
        nickname: data?.nickname,
        username: data?.username
      } as any);
    });
  }

  static backIfLogged() {
    let userInfo = Global.getUserInfo(false);
    let isLogged = Global.isLogged(userInfo);
    if (!isLogged) {
      return;
    }
    PageKit.GoHome().then(_ => console.debug('回退, 因为用户已经登陆过了'));
  }

  static isLogged(userInfo?: UserInfo): boolean {
    return !!userInfo?.token;
  }

  static getUserInfo(isGoPage = true): UserInfo {
    let userInfo = StorageKit.getStorageSync(StorageKeys.USER_INFO);
    if (!Global.isLogged(userInfo) && isGoPage) {
      PageKit.GoLogin();
      return {} as any;
    }
    return userInfo;
  }

  static setUserInfo(userInfo: UserInfo) {
    StorageKit.setStorageSync(StorageKeys.USER_INFO, userInfo)
    EventKit.updateUser();
    return userInfo;
  }

  // @formatter:off
  static login(force = false, {
    complete = () => {
    }, success = (userInfo) => {
    }
  }) {
    // @formatter:on
    let userInfo = Global.getUserInfo(false);

    // 当需要强制登录，或者用户信息不存在，则调用获取登录凭证
    let toLogin = force || !userInfo;
    if (!toLogin) {
      return;
    }
    Taro.getUserProfile({desc: '登陆'}).then(res => {
      Taro.login({}).then(({errMsg, code}) => {
        if (!code) {
          console.warn('登陆失败: ', errMsg);
          complete();
          return;
        }
        AppService.getUserToken({code, ...res?.userInfo}).then(data => {
          let userDetail = data?.userDetail;
          let token = data?.token;
          success(Global.setUserInfo({
            ...userDetail, token,
            avatarUrl: userDetail?.avatar
          }));
        }).finally(complete);
      }).catch(complete);
    }).catch(complete);
  }

  static userInfoReadyCallback = (cb) => cb?.()
};
