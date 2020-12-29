import React from 'react';
import {AtNavBar, AtTabBar} from 'taro-ui'
import Taro from "@tarojs/taro";
import classnames from 'classnames';
import {View} from "@tarojs/components";
import Barton from "@/components/common/Barton";
import Avatarton from "@/components/common/Avatarton";
import Utils from "@/utils/utils";
import Pages from "@/utils/pages";
import Config from "@/config";
import styles from './index.less';

let tabBar = [
  {title: '首页', iconType: 'home', url: '/pages/index/index'},
  {title: '优惠', iconType: 'shopping-bag', url: '/pages/discount/index'},
  {title: '工具', iconType: 'lightning-bolt', url: '/pages/login/index'},
  {title: '个人中心', iconType: 'user', url: '/pages/login/index'}
];

class Index extends React.Component {
  state = {
    defaultHeaderHeight: 0,
    statusBarHeight: 0,
    hasScroll: false,
    appbarHeight: null,
    tabIndex: 0,
  };

  componentDidMount() {
    let systemInfo = Utils.getSystemInfo();
    this.setState({
      defaultHeaderHeight: systemInfo.DEFAULT_HEADER_HEIGHT,
      statusBarHeight: systemInfo.STATUS_BAR_HEIGHT,
    });

    // 监听事件来调整 UI
    Taro.eventCenter.once(Taro.getCurrentInstance().router.onReady, () => {
      let query = Taro.createSelectorQuery();
      query.select('#appbar')
        .boundingClientRect()
        .exec(res => {
          let height = res[0]?.height;
          this.setState({appbarHeight: height})
        });

      query.select('#tabbar')
        .boundingClientRect()
        .exec(res => {
          let height = res[0]?.height;
          this.setState({tabBarHeight: height})
        });
    });

  }


  render() {
    let {
      wrapperClassName, containerClassName,
      children, title,
      // 顶部
      wrapperAppbarClassName,
      hideBarton = false,
      navbarColor = '#020202',
      hideAppbar = false,
      hideAvatar = true,
      // - 浮动按钮
      wrapperBartonClassName,
      // 底部
      hideTabBar = true,
      // 其他
      avatarUrl
    } = this.props;
    let {
      defaultHeaderHeight, statusBarHeight, hasScroll,
      tabBarHeight, appbarHeight,
      tabIndex
    } = this.state;
    let appbarStyle = {
      height: defaultHeaderHeight,
      borderBottom: hasScroll ? 'solid 1px #F0F0F0' : 'none',
      paddingTop: statusBarHeight
    };

    return (<View className={classnames(styles.component, wrapperClassName)}>
      {/*appbar*/}
      {hideAppbar ? <></> : <>
        <View className={classnames(styles.appbar, wrapperAppbarClassName)} id='appbar'
              style={appbarStyle}>
          <AtNavBar border={false} color={navbarColor} title={title} />
          <Avatarton visible={!hideAvatar} avatarUrl={avatarUrl || Config.getDefaultUserUrl()} className={styles.barton}
                     onClickGoUser={this.onClickAvatarton} />
          <Barton visible={!hideBarton} className={classnames(styles.barton, wrapperBartonClassName)} />
        </View>
        <View className={styles.appbarSpace} style={{height: appbarHeight, opacity: 0}} />
      </>}
      {/*内容容器*/}
      <View className={containerClassName}>
        {children}
      </View>
      {/*底部*/}
      {hideTabBar ? <></> : <>
        <AtTabBar id='tabbar' fixed tabList={tabBar}
                  onClick={this.onClickTab}
                  current={tabIndex} />
        <View style={{height: tabBarHeight}} />
      </>}
    </View>);
  }

  onClickAvatarton = () => {
    Pages
      .gotoUser();
  }

  onClickTab = (index) => {
    let {tabIndex} = this.state;
    if (tabIndex === index) {
      return;
    }
    let {url} = tabBar[index];
    this.setState({tabIndex: index});
    Taro.navigateTo({url}).then(res => {
    });
  }
}

export default Index;
