import React from 'react';
import {View, Text} from "@tarojs/components";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {children, className, rightBtn} = this.props;
    return (<View className={classnames(styles.component, className)}>
      <View className={styles.container}>
        <View className={styles.colorBar} />
        <Text className={styles.title}>{children}</Text>
      </View>
      {rightBtn}
    </View>);
  }
}

Index.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rightBtn: PropTypes.node,
};
export default Index;
