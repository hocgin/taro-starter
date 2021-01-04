import React, {Component} from 'react'
import {connect} from "react-redux";
import PageLayout from '@/layouts/common/PageLayout';
import {AtForm, AtInput, AtList, AtListItem} from "taro-ui";

import styles from './index.less';

@connect(({user}) => ({
  user
}), (dispatch) => ({
  $getCurrentUser: (args = {}) => dispatch({type: 'user/getCurrentUser', ...args})
}))
class Index extends Component {

  componentWillMount() {
    let {$getCurrentUser} = this.props;
    $getCurrentUser({payload: {}});
  }

  render() {
    let {user} = this.props;
    let currentUser = user?.currentUser;
    return (<PageLayout containerClassName={styles.page}>
      <AtList>
        <AtListItem title='头像' extraThumb={currentUser?.avatar || '暂无'} />
        <AtListItem title='昵称' extraText={currentUser?.nickname || '暂无'} />
        <AtListItem title='用户名' extraText={currentUser?.username || '暂无'} />
        <AtListItem title='邮箱号' extraText={currentUser?.email || '暂无'} />
        <AtListItem title='手机号' extraText={currentUser?.phone || '暂无'} />
        <AtListItem title='性别' extraText={currentUser?.genderName || '暂无'} />
      </AtList>
    </PageLayout>);
  }

}

export default Index;
