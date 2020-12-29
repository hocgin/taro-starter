import React, {Component} from 'react'
import {Provider} from 'react-redux';
import Taro from '@tarojs/taro';
import Pages from '@/utils/pages';
import dva from '@/utils/dva';
import models from '@/models'
import Utils from "@/utils/utils";
import Events from "@/utils/events";
import {Keys, setStorageSync, getStorageSync} from "@/utils/storage";
import API from "@/services/api";

import './theme.global.scss';
import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
})

const store = dvaApp.getStore();

class App extends Component {
  constructor() {
    super(...arguments);
    let app = Taro.Current.app;

    app.isLogged = (userInfo) => {
      return userInfo;
    };

    app.getUserInfo = (isGoPage = true) => {
      let userInfo = getStorageSync(Keys.USER_INFO);

      console.log('获取的用户信息', userInfo, !!userInfo);
      if (!app.isLogged(userInfo) && isGoPage) {
        Pages.gotoApply();
        return {};
      }
      return userInfo;
    };
    app.setUserInfo = ({token, userDetail}) => {
      let userInfo = {
        ...userDetail,
        avatarUrl: userDetail?.avatar,
        token
      };
      setStorageSync(Keys.USER_INFO, userInfo)
      Events.updateUser();
      return userInfo;
    };

    // @formatter:off
    app.login = ({ focuse = false,
                   complete = () => {}, success = (userInfo) => { }}) => {
    // @formatter:on
      let userInfo = app.getUserInfo(false);
      if (focuse || !userInfo) {
        Taro.login({}).then(({errMsg, code}) => {
          if (!code) {
            console.warn('登陆失败: ', errMsg);
            complete();
            return;
          }
          Taro.getUserInfo({withCredentials: true}).then(res => {
            API.getUserToken({code, ...res}).then(result => {
              if (Utils.ifFailShowMessage(result)) {
                success(app.setUserInfo(result?.data));
              }
            }).finally(complete);
          }).catch(complete);
        }).catch(complete);
      }
    };
  }

  componentWillMount() {
    this.loadUserInfo();
  }

  render() {
    return (<Provider store={store}> {this.props.children} </Provider>);
  }

  // 获取用户信息
  loadUserInfo() {
    let app = Taro.Current.app;
    Taro.getSetting({}).then(res => {
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
      if (res.authSetting['scope.userInfo']) {
        app.login({callback: app.userInfoReadyCallback});
      }
    })
  }


}

export default App
