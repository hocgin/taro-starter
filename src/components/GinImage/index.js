import React from 'react';
import {Image, View} from "@tarojs/components";
import classnames from "classnames";
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {src, className} = this.props;
    let prefix = this.getImagePrefix(src);
    return (
      <View className={classnames(styles.component, className)}>
        <View className={styles.photoShot}>
          <View className={styles.photoImg}>
            <Image src={src} className={styles.photo} />
          </View>
        </View>
        {prefix !== '' && <View className={styles.indicator}>{prefix}</View>}
      </View>
    );
  }

  getImagePrefix = (src) => {
    let prefix = `${src}`;
    if (prefix.includes('.')) {
      let lastIndex = prefix.lastIndexOf('.');
      prefix = prefix.substr(lastIndex + 1);
    }
    if (prefix.length > 4) {
      prefix = '';
    }
    return prefix.toUpperCase();
  };
}

export default Index;
