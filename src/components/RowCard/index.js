import React from 'react';
import {Image, Text, View} from "@tarojs/components";
import GinImage from "@/components/GinImage";
import Pages from "@/utils/pages";
import classnames from "classnames";
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {
      title, logoUrl, viewUrls = [], remark, tags = [], href = {}, className
    } = this.props;
    return (<View className={classnames(styles.component, className)} onClick={this.onClickHref.bind(this, href)}>
      <View className={styles.appinfo}>
        <View className={styles.title}>
          <Image className={styles.logo} mode='scaleToFill'
                 src={logoUrl} /> {title} </View>
        {/*<Text className={styles.user}>@hocgin</Text>*/}
        <Text className={styles.remark}>{remark}</Text>
        <Text className={styles.tags}>{tags.join('、')}</Text>
      </View>
      {viewUrls.length > 0 && <View className={styles.scrollView}>
        {viewUrls.map((src) => (<GinImage src={src} className={styles.item} />))}
      </View>}
    </View>);
  }

  onClickHref({mini}) {
    let {path} = mini;
    Pages.goto(path);
  };
}

export default Index;
