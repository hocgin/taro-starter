import React from 'react';
import classnames from "classnames";
import {Image, View} from "@tarojs/components";
import PropTypes from "prop-types";
import styles from './index.less';

class Index extends React.Component {

  render() {
    let {className, visible = true, onClickGoUser, avatarUrl} = this.props;
    let style = visible ? {} : {display: 'none'};
    return (<View style={style}
                  className={classnames(styles.component, className)}
                  onClick={onClickGoUser}>
      <Image mode='scaleToFill' className={styles.avatar} src={avatarUrl} lazyLoad />
    </View>);
  }
}

Index.propTypes = {
  visible: PropTypes.bool,
  className: PropTypes.string,
  onClickGoUser: PropTypes.func,
  avatarUrl: PropTypes.string,
};

export default Index;
