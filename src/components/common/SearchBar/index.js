import React from 'react';
import {View, Input, Icon} from "@tarojs/components";
import * as classnames from "classnames";
import PropTypes from "prop-types";
import styles from './index.less';

const DefaultResultItem = ({children}) => {
  return (<View className={styles.resultItem}>
    <View>{children}</View>
  </View>);
}

class Index extends React.PureComponent {
  state = {
    focus: false
  };

  render() {
    let {focus} = this.state;
    let {
      className,
      onChangeKeyword,
      data = [],
      renderItem = (item, index) => <DefaultResultItem key={`${index}`}>{item}</DefaultResultItem>
    } = this.props;

    return (<View className={classnames(styles.component, className)}>
      <View className={styles.searchbar}>
        <Input type='text' className={styles.input} placeholder='搜索..' onInput={onChangeKeyword}
               onFocus={this.onFocusSearch}
               onBlur={this.onBlurSearch} />
        <Icon size='18' type='search' className={styles.icon} />
      </View>
      <View className={styles.result} style={{display: ((data.length) && focus) ? 'block' : 'none'}}>
        {(data || []).map((item, index) => {
          return renderItem(item, index);
        })}
      </View>
    </View>);
  }

  onBlurSearch = () => this.setState({
    focus: false,
  });

  onFocusSearch = () => this.setState({
    focus: true,
  });

}

Index.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onChangeKeyword: PropTypes.func,
  renderItem: PropTypes.func,
  data: PropTypes.object,
};
export default Index;

