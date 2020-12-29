import React, {Component} from 'react'
import {connect} from "react-redux";
import PageLayout from '@/components/PageLayout';
import styles from './index.less';
import {Image, Text, View} from "@tarojs/components";

@connect(({apps}) => ({
  // apps
}), (dispatch) => ({
  // listCoupon: (args = {}) => dispatch({type: 'apps/listCoupon', ...args})
}))
class Index extends Component {

  componentWillMount() {
    // ..页面加载时触发，一个页面只会调用一次，此时页面 DOM 尚未准备好，还不能和视图层进行交互
  }

  componentDidMount() {
    // ..页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  }

  componentWillUnmount() {
    // ..页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时
  }

  componentDidShow() {
    // ..页面显示/切入前台时触发
  }

  componentDidHide() {
    // ..页面隐藏/切入后台时触发， 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
  }

  // 对应 onError
  componentDidCatchError() {
  }

  render() {
    let {apps} = this.props;
    return (<PageLayout containerClassName={styles.page}>
      {/*  ..  */}
    </PageLayout>);
  }

}

export default Index;
