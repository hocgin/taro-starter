import React from 'react';
import {View, Text} from "@tarojs/components";
import classnames from "classnames";
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

export default Index;
