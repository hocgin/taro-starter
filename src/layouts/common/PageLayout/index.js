import React from 'react';
import {AtIcon, AtNavBar, AtTabBar} from 'taro-ui'
import Taro from "@tarojs/taro";
import classnames from 'classnames';
import {View} from "@tarojs/components";
import Barton from "@/components/common/Barton";
import Avatarton from "@/components/common/Avatarton";
import Utils from "@/utils/utils";
import Pages from "@/utils/pages";
import Config from "@/config";
import PropTypes from "prop-types";
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
    closeAddTips: false,
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
      hideNavBar = false,
      hideBarton = false,
      navbarColor = '#020202',
      showAddTips = false,
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
      tabBarHeight, appbarHeight, closeAddTips,
      tabIndex
    } = this.state;
    let appbarStyle = {
      backgroundColor: hideNavBar ? 'none' : 'rgba(255, 255, 255, .98)',
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
        {hideNavBar ? <></> : <View className={styles.appbarSpace} style={{height: appbarHeight, opacity: 0}} />}
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
      {/* 提示用户添加到我的小程序*/}
      {(showAddTips && !closeAddTips) ? <View className={styles.addTips}>
        <View className={styles.tips}
              style={{top: hideNavBar ? (statusBarHeight + defaultHeaderHeight) : 0}}>添加到我的小程序 <AtIcon
          className={styles.close} size={12}
          onClick={this.onClickCloseTip}
          value={'close-circle'} /></View>
      </View> : <></>}
    </View>);
  }

  onClickAvatarton = () => {
    Pages.gotoUser();
  }
  onClickCloseTip = () => {
    this.setState({closeAddTips: true});
  };

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

Index.propTypes = {
  wrapperClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  wrapperAppbarClassName: PropTypes.string,
  wrapperBartonClassName: PropTypes.string,
  title: PropTypes.string,
  navbarColor: PropTypes.string,
  avatarUrl: PropTypes.string,
  children: PropTypes.node,
  hideTabBar: PropTypes.bool,
  hideAppbar: PropTypes.bool,
  hideAvatar: PropTypes.bool,
  hideNavBar: PropTypes.bool,
  showAddTips: PropTypes.bool,
  hideBarton: PropTypes.bool,
};

export default Index;
