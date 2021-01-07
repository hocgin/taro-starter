import React, {Component} from 'react'
import {connect} from "react-redux";
import Taro from '@tarojs/taro';
import PageLayout from '@/layouts/common/PageLayout';
import { Text, View} from "@tarojs/components";
import {AtRadio} from "taro-ui";
import styles from './index.less';

const blood ={
  "AA":"A 型或 O 型，不可能为 B 型 和 AB 型",
  "AB":"A 型、B 型、AB 型、O 型",
  "AO":"A 型或 O 型，不可能为 B 型 和 AB 型",
  "AAB":"A 型 、B型 及 AB型之一，不可能为 O 型",
  "BB":"B 型或 O 型，不可能为 A 型 和 AB 型",
  "ABB":"A 型 、B型 及 AB型之一，不可能为 O 型",
  "ABO":"A 型或 B 型，不可能为 O 型 和 AB 型",
  "AABB":"A 型 、B型 及 AB型之一，不可能为 O 型",
  "BO":"B 型或 O 型，不可能为 A 型 和 AB 型",
  "OO":"O 型，不可能为 A 型、B 型和 AB 型"

};

@connect(({apps}) => ({
  // apps
}), (dispatch) => ({
  // listCoupon: (args = {}) => dispatch({type: 'apps/listCoupon', ...args})
}))
class Index extends Component {
  state = {
    me: 'A',
    to: 'A',
    textResult: blood["AA"]
  };

  render() {

    return (<PageLayout title='子女血型遗存查询' containerClassName={styles.page}>
      <Text >您的血型:</Text>
      <AtRadio
        options={[
          { label: 'A型', value: 'A' },
          { label: 'B型', value: 'B' },
          { label: 'AB型', value: 'AB'},
          { label: '0型', value: 'O'}
        ]}
        value={this.state.me}
        onClick={this.onChangeMeText}
      />
      <Text >配偶血型:</Text>
      <AtRadio
        options={[
          { label: 'A型', value: 'A' },
          { label: 'B型', value: 'B' },
          { label: 'AB型', value: 'AB'},
          { label: '0型', value: 'O'}
        ]}
        value={this.state.to}
        onClick={this.onChangeToText}
      />
      <View > <View > <Text>结果</Text></View><Text className={styles.href} onClick={this.onClickCopy}>复制</Text></View>
      <View className={styles.textshow}>{this.state.textResult}</View>
    </PageLayout>);
  }

  onChangeMeText = (val) => {
    this.setState({me: val});
    this.onQuery()
  };

  onChangeToText = (val) => {
    this.setState({to: val});
    this.onQuery()
  };
  onQuery = () => {
    let {me,to} = this.state;
    let meto = me+to;
    let result = meto.split('').sort((a,b) => {
      return a.charCodeAt(0)- b.charCodeAt(0);
    });
    this.setState({textResult:  "您的孩子的血型可能为 " + blood[result.join("")]});
  };

  onClickCopy = () => {
    let {textResult} = this.state;
    Taro.setClipboardData({data: textResult});
  };


}

export default Index;
