import Taro, {useDidShow} from '@tarojs/taro';
import './app.less'
import Global from "@/global";


export default ({children}) => {
  useDidShow(() => {
    Taro.getSetting({}).then(res => {
      // 已经授权，可以直接调用 获取头像昵称，不会弹框
      if (res.authSetting['scope.userInfo']) {
        Global.login(false, {success: Global.userInfoReadyCallback});
      }
    })
  });
  return (<>{children}</>)
};
