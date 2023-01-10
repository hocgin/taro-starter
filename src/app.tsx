import Taro, {useDidShow} from '@tarojs/taro';
import {PageKit} from "@/_utils";
import {defaultRequestOptions, EnvPropsKit, PromiseKit, TaroKit} from "@hocgin/taro-kit";
import Config from "@/config";
import './app.less'

defaultRequestOptions({
  baseUrl: Config.getBaseUrl(),
  nologin: () => PageKit.toLogin(),
  addHeaders: async () => ({
    "X-Source": `${EnvPropsKit.getAppid()}`,
  }),
  errorHandler: error => TaroKit.error(`${error?.message ?? `系统繁忙`}`),
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
