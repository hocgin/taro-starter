import Taro, {useDidShow} from '@tarojs/taro';
import './app.less'
import {PromiseKit} from "@hocgin/taro-kit";
import {PageKit} from "@/_utils";
import {defaultRequestOptions, EnvPropsKit} from "@hocgin/taro-kit";
import Config from "@/config";

defaultRequestOptions({
  baseUrl: Config.getBaseUrl(),
  nologin: PageKit.toLogin,
  addHeaders: async () => ({
    "X-Source": `${EnvPropsKit.getAppid()}`,
  }),
  errorHandler: error => Taro.showToast({
    title: `${error?.message ?? `系统繁忙`}`,
    icon: 'error',
    duration: 1000
  }),
});

export default ({children}) => {
  useDidShow(() => {
    Taro.getSetting({}).then(res => {
      // 已经授权，可以直接调用 获取头像昵称，不会弹框
      if (res.authSetting['scope.userInfo']) {
        PromiseKit.Global.login(false, {success: PromiseKit.Global.userInfoReadyCallback});
      }
    })
  });
  return (<>{children}</>)
};
