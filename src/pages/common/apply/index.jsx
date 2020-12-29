import React, {Component} from 'react'
import {connect} from "react-redux";
import PageLayout from '@/layouts/common/PageLayout';
import Pages from "@/utils/pages";
import {Button, Image, Text, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import Config from "@/config";
import {AtButton, AtInput} from "taro-ui";
import classnames from "classnames";
import styles from './index.less';

const LoginMode = {
  UseWeChat: 0,
  UsePassword: 1
};


let UseWeChatMode = ({isLogging, onClickGetUserInfo, onClickLoginUseWeChat, onClickToggleMode}) => {
  return (<>
    <View className={styles.header}>
      <Image className={styles.logo} src={Config.getLogoUrl()} />
      <Text className={styles.appName}>{Config.getAppName()}</Text>
    </View>
    <View className={styles.content}>
      <View className={styles.tip}>允许小程序获得微信授权，才能正常使用</View>
      <View className={styles.authority}>获得你的公开信息(昵称，头像等)</View>
    </View>
    <AtButton openType='getUserInfo' type='primary'
              loading={isLogging} onClick={onClickLoginUseWeChat}
              onGetUserInfo={onClickGetUserInfo}>一键登录</AtButton>
    <View className={styles.toggleMode}
          onClick={onClickToggleMode.bind(this, LoginMode.UsePassword)}>已有账号登陆/注册</View>
  </>);
};

// @formatter:off
let UsePasswordMode = ({ isLogging, password, username,
                         onChangePassword, onChangeUsername, onClickLoginUsePassword, onClickToggleMode }) => {
// @formatter:on
  return (<>
    <Image className={styles.avatar} src={Config.getLogoUrl()} />
    <View className={styles.accountBox}>
      <AtInput name='username' type='text' placeholder='请输入账号' value={username}
               onChange={onChangeUsername} />
      <AtInput name='password' type='password' placeholder='请输入密码' value={password}
               onChange={onChangePassword} />
    </View>
    <AtButton type='primary' loading={isLogging}
              onClick={onClickLoginUsePassword}>登陆</AtButton>
    <View className={styles.toggleMode}
          onClick={onClickToggleMode.bind(this, LoginMode.UseWeChat)}>使用微信登陆/注册</View>
  </>);
};

@connect(({apply}) => ({
  apply
}), (dispatch) => ({
  $getUserToken: (args = {}) => dispatch({type: 'apply/getUserToken', ...args}),
  $login: (args = {}) => dispatch({type: 'apply/login', ...args}),
  $getCurrentUser: (args = {}) => dispatch({type: 'apply/getCurrentUser', ...args}),
}))
class Index extends Component {
  state = {
    userInfo: null,
    isLogging: false,
    hasUserInfo: false,
    mode: LoginMode.UseWeChat,
    canIUse: Taro.canIUse('button.open-type.getUserInfo') ?? false,
    // ..
    username: null,
    password: null
  };

  componentDidMount() {
    this.loadUserInfo();
  }

  render() {
    this.hookIsLogged();
    let {mode, isLogging} = this.state;

    let isUseWeChat = mode === LoginMode.UseWeChat;
    return (<PageLayout containerClassName={styles.page} hideBarton>
      <View className={classnames(styles.container, {
        [styles.wechatMode]: isUseWeChat,
        [styles.accountMode]: !isUseWeChat,
      })}>
        {isUseWeChat ? <UseWeChatMode isLogging={isLogging}
                                      onClickGetUserInfo={this.onClickGetUserInfo}
                                      onClickLoginUseWeChat={this.onClickLoginUseWeChat}
                                      onClickToggleMode={this.onClickToggleMode} />
          : <UsePasswordMode isLogging={isLogging}
                             username={this.state.username}
                             password={this.state.password}
                             onChangeUsername={this.onChangeUsername}
                             onClickLoginUsePassword={this.onClickLoginUsePassword}
                             onClickToggleMode={this.onClickToggleMode}
                             onChangePassword={this.onChangePassword} />}
      </View>
      <View className={styles.footer}>登录即表示同意
        <text>《用户协议》</text>
      </View>
    </PageLayout>);
  }

  // 切换模式
  onClickToggleMode = (mode) => {
    this.setState({mode: mode});
  };

  // 设置密码
  onChangePassword = (val) => {
    this.setState({password: val});
  };

  // 设置账号
  onChangeUsername = (val) => {
    this.setState({username: val});
  };

  // 如果登陆则自动回退
  hookIsLogged = () => {
    let {hasUserInfo, canIUse} = this.state;
    let app = Taro.Current.app;
    let userInfo = app.getUserInfo(false);
    let isLogged = app.isLogged(userInfo);
    if (!isLogged) {
      return;
    }

    Pages.goBack().then(_ => console.debug('回退, 因为用户已经登陆过了'));
  };

  // 加载用户信息
  loadUserInfo = () => {
    const app = Taro.Current.app;
    let {canIUse} = this.state;

    let userInfo = app?.getUserInfo(false);
    if (userInfo) {
      console.debug("==> 已获取过用户信息", userInfo)
      this.setState({
        userInfo: userInfo,
        hasUserInfo: true
      });
    } else if (canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.debug("==> 从内存中获取用户信息", res)
        this.setState({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      // this.onClickLogin();
      Taro.getUserInfo({}).then(res => console.debug("==> 请求用户确认获取用户信息", res));
    }
  };

  // 授权后加载用户信息
  onClickGetUserInfo = (e) => {
    let userInfo = e?.detail?.userInfo || null;
    this.setState({
      userInfo: userInfo,
      hasUserInfo: true
    }, this.hookIsLogged);
  }

  // 使用密码登陆
  onClickLoginUsePassword = () => {
    let {username, password} = this.state;
    let {$login, $getCurrentUser} = this.props;
    this.setState({isLogging: true});
    $login({
      payload: {
        mode: 'use_password',
        passwordMode: {
          username: username,
          password: password,
        }
      },
      callback: (result) => {
        let token = result?.data;
        Taro.Current.app.setUserInfo({token});
        // @formatter:off
        $getCurrentUser({callback: ({data}) => {
            Taro.Current.app.setUserInfo({
              token: token,
              userDetail: {
                avatar: data?.avatar,
                nickname: data?.nickname,
                username: data?.username
              },
            });
        }});
        // @formatter:on
      },
      complete: () => this.setState({isLogging: false}),
    });
  };

  // 使用微信登陆
  onClickLoginUseWeChat = () => {
    this.setState({isLogging: true});
    Taro.Current.app.login({
      success: () => this.hookIsLogged(),
      complete: () => this.setState({isLogging: false}),
    });
  }

}

export default Index;
