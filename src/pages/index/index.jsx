import React, {Component} from 'react'
import {connect} from "react-redux";
import Taro from '@tarojs/taro';
import Events from "@/utils/events";
import {View, Text, Image} from '@tarojs/components';
import PageLayout from '@/layouts/common/PageLayout';
import SearchBar from '@/components/common/SearchBar';
import ColorTitle from "@/components/common/ColorTitle";

import styles from './index.less';
import qs from "querystring";
import {PageKey} from "@/utils/pages";

@connect(({index}) => ({
  index
}), (dispatch) => ({
  // $listRecommend: (args = {}) => dispatch({type: 'index/listRecommend', ...args}),
  // $search: (args = {}) => dispatch({type: 'index/search', ...args})
}))
class Index extends Component {
  state = {
    avatarUrl: null,
  }

  componentWillMount() {
    Events.onUpdateUser(this.refreshAvatarUrl);
  }

  componentDidShow() {
    this.refreshAvatarUrl();
  }

  componentWillUnmount() {
    Events.offUpdateUser(this.refreshAvatarUrl);
  }

  refreshAvatarUrl = () => {
    let avatarUrl = Taro.Current.app.getUserInfo(false)?.avatarUrl;
    this.setState({
      avatarUrl: avatarUrl
    });
  };

  render() {
    let {avatarUrl} = this.state;
    let {index} = this.props;

    return (<PageLayout avatarUrl={avatarUrl} hideBarton hideAvatar={false} title='首页'
                        showAddTips
                        containerClassName={styles.page}>
      <View className={styles.indexBg}>
        <SearchBar className={styles.searchBar} data={index?.searchResult} onChangeKeyword={this.onChangeKeyword} />
      </View>
      <View className={styles.containerWrapper}>
        <View className={styles.header}>
          <ColorTitle className={styles.title}>最新推荐</ColorTitle>
          <Text />
        </View>
      </View>
    </PageLayout>);
  }

  onChangeKeyword = (e) => {
    let keyword = e?.detail?.value;
    let {$search} = this.props;
    $search({payload: {keyword}});
  };

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }

    return {
      title: `分享到好友`,
      path: `${PageKey.INDEX_PAGE}?${qs.stringify({})}`
    }
  }

  onShareTimeline() {
    return {
      title: `分享到朋友圈`,
      query: {},
      imageUrl: 'http://cdn.hocgin.top/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png',
    };
  }

}

export default Index;
