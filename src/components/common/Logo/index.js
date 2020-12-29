import React from 'react';
import classname from 'classnames';
import heartSvg from '@/assets/heart.svg'
import {Image, View} from "@tarojs/components";
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {className} = this.props;
    return (<view className={classname(styles.component, className)}>
      <Image className={styles.heart} src={heartSvg} />
      <text className={styles.text}>HOCGIN</text>
    </view>);
  }
}

export default Index;
