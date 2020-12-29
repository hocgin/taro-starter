import React, {Component} from 'react'
import {connect} from "react-redux";
import PageLayout from '@/layouts/common/PageLayout';
import UserPanel from '@/components/common/UserPanel';
import Taro from "@tarojs/taro";
import Events from "@/utils/events";
import Config from "@/config";

import styles from './index.less';

@connect(({user}) => ({
  // user
}), (dispatch) => ({
  // $getCurrentUser: (args = {}) => dispatch({type: 'user/getCurrentUser', ...args}),
}))
class Index extends Component {
  state = {
    avatarUrl: null,
    nickname: null
  };

  componentWillMount() {
    Events.onUpdateUser(this.refreshUserInfo);
  }

  componentDidShow() {
    this.refreshUserInfo();
  }

  componentWillUnmount() {
    Events.offUpdateUser(this.refreshUserInfo);
  }

  refreshUserInfo = (isGoPage = false) => {
    let {avatarUrl, nickname} = Taro.Current.app.getUserInfo(isGoPage);
    this.setState({
      avatarUrl,
      nickname
    });
  };

  render() {
    let {avatarUrl, nickname} = this.state;
    return (<PageLayout containerClassName={styles.page}
                        navbarColor='#fff'
                        wrapperAppbarClassName={styles.appbar}
                        title='个人中心'>
      <UserPanel avatarUrl={avatarUrl || Config.getDefaultUserUrl()} nickname={nickname}
                 onClickNickname={this.onClickNickname} />
    </PageLayout>);
  }

  onClickNickname = () => this.refreshUserInfo(true);
}

export default Index;
