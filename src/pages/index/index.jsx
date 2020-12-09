import React, {Component} from 'react'
import {connect} from "react-redux";
import {View, Text} from '@tarojs/components'
import Test from '@/components/Test'
import {AtButton} from 'taro-ui'
import styles from './index.less'

@connect(({apps}) => ({
  apps
}), (dispatch) => ({
  listCoupon: (args = {}) => dispatch({type: 'apps/listCoupon', ...args})
}))
class Index extends Component {

  componentWillMount() {
  }

  componentDidMount() {
    let {listCoupon} = this.props;
    listCoupon({});
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    let {apps} = this.props;
    return (
      <View>
        <Test></Test>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
      </View>
    )
  }
}

export default Index;
