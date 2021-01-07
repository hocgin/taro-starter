import React, {Component} from 'react'
import {connect} from "react-redux";
import Taro from '@tarojs/taro';
import Events from "@/utils/events";
import {View, Text, Image} from '@tarojs/components';
import PageLayout from '@/layouts/common/PageLayout';
import SearchBar from '@/components/common/SearchBar';
import ColorTitle from "@/components/common/ColorTitle";
import RowCard from "@/components/RowCard";
import styles from './index.less';

let appItems = [{
  title: '子女血型遗存查询',
  remark: '你想知道你未来小孩的血型吗',
  logoUrl: 'https://xcx.egzosn.com/image/blood.jpg',
  viewUrls: [],
  tags: ['子女', '血型', '遗传'],
  href: {
    mini: {
      appid: null,
      path: `/pages/bloodtype/index`
    }
  }
}];
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
                        containerClassName={styles.page}>
      <View className={styles.indexBg}>
        <SearchBar className={styles.searchBar} data={index?.searchResult} onChangeKeyword={this.onChangeKeyword} />
      </View>
      <View className={styles.containerWrapper}>
        <View className={styles.header}>
          <ColorTitle className={styles.title}>最新推荐</ColorTitle>
          <Text />
        </View>
        <View className={styles.container}>
          {(appItems|| []).map(({remark, title, logoUrl, tags, viewUrls, href}) =>
            <RowCard className={styles.rowCard} logoUrl={logoUrl} viewUrls={viewUrls} remark={remark} title={title}
                     tags={tags} href={href} />)}
        </View>
      </View>
    </PageLayout>);
  }

  onChangeKeyword = (e) => {
    let keyword = e?.detail?.value;
    let {$search} = this.props;
    $search({payload: {keyword}});
  };

}

export default Index;
