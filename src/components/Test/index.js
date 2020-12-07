import React from 'react';
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {} = this.props;
    return (<view className={styles.component}>
      <text>tpl</text>
    </view>);
  }
}

export default Index;
