import {Image} from '@tarojs/components';
import React from 'react';
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {image, ...rest} = this.props;
    return (<view {...rest} className={styles.component}>
      <Image src={image} mode="widthFix" className={styles.image} />
    </view>);
  }
}

export default Index;
