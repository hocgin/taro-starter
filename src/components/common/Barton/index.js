import React from 'react';
import {AtIcon} from "taro-ui";
import {View} from "@tarojs/components";
import classnames from "classnames";
import PropTypes from "prop-types";
import Pages from "@/utils/pages";

import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {
      className,
      visible,
      leftIcon = 'chevron-left',
      rightIcon = 'home',
      onClickLeft = () => Pages.goBack().then(res => {
        console.debug('点击[⬅️]按钮', res);
      }),
      onClickRight = () => Pages.goHome().then(res => {
        console.debug('点击[🏠]按钮', res);
      })
    } = this.props;
    let style = visible ? {} : {display: 'none'};
    return (<View className={classnames(styles.component, className)} style={style}>
      <AtIcon className={styles.icon} size='20' value={leftIcon} onClick={onClickLeft} />
      <AtIcon className={styles.icon} size='20' value={rightIcon} onClick={onClickRight} />
    </View>);
  }
}

Index.propTypes = {
  visible: PropTypes.bool,
  className: PropTypes.string,
  onClickLeft: PropTypes.func,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
};


export default Index;
