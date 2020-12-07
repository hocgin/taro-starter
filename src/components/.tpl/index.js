import React from 'react';
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {} = this.props;
    return (
      <div className={styles.component}>
        <div>tpl</div>
      </div>
    );
  }
}

export default Index;
