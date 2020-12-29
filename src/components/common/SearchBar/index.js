import React from 'react';
import {View, Editor, Input, Icon} from "@tarojs/components";
import * as classnames from "classnames";
import styles from './index.less';

class Index extends React.PureComponent {
  state = {
    focus: false
  };

  render() {
    let {focus} = this.state;
    let {className, onChangeKeyword, data = []} = this.props;

    return (<View className={classnames(styles.component, className)}>
      <View className={styles.searchbar}>
        <Input type='text' className={styles.input} placeholder='搜索..' onInput={onChangeKeyword}
               onFocus={this.onFocusSearch}
               onBlur={this.onBlurSearch} />
        <Icon size='18' type='search' className={styles.icon} />
      </View>
      <View className={styles.result} style={{display: (data.length && focus) ? 'block' : 'none'}}>
        {(data || []).map(({remark, title, logoUrl, tags, viewUrls, href}) => (<View className={styles.resultItem}>
          <View logoUrl={logoUrl} viewUrls={viewUrls} remark={remark} title={title} tags={tags} href={href} >{title}</View>
        </View>))}
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

export default Index;

