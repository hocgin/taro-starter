import React, {Component} from 'react'
import {connect} from "react-redux";
import {View, Text} from '@tarojs/components';
import Card from '@/components/Card';
import Taro from '@tarojs/taro';
import ele_guosu from '@/assets/ele_guosu.png'
import ele from '@/assets/ele_pt.png'
import styles from './index.less';

const imageMaps = {
  'ele': ele,
  'ele_guosu': ele_guosu,
};

@connect(({apps}) => ({
  apps
}), (dispatch) => ({
  listCoupon: (args = {}) => dispatch({type: 'apps/listCoupon', ...args})
}))
class Index extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
    let {listCoupon} = this.props;
    listCoupon({});
  }

  componentDidHide() {
  }

  render() {
    let {apps} = this.props;
    return (<View>
      {(apps.allCoupon || []).map((item) =>
        <Card onClick={this.onClickCoupon.bind(item)} image={imageMaps[item.type]} />
      )}
      <Text onClick={this.props.listCoupon}>Hello World</Text>
    </View>);
  }

  onClickCoupon({url, mini: {appid, path}}) {
    switch (Taro.getEnv()) {
      case Taro.ENV_TYPE.WEAPP: {
        Taro.navigateToMiniProgram({appId: appid, path: path,});
        break;
      }
      case Taro.ENV_TYPE.WEB:
      default:
        window.location.href = url;
    }
  }
}

export default Index;
