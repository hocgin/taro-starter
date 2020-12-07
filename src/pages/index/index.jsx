import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import API from "@/services/api";
import styles from './index.less'

export default class Index extends Component {

  componentWillMount() {
  }

  componentDidMount() {
    API.worked({})
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View>
        <View className={styles.red}>Hello world!</View>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
      </View>
    )
  }
}
