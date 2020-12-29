import React from 'react';
import {Image, Navigator, Text, View} from "@tarojs/components";
import styles from './index.less';

class Index extends React.PureComponent {
  render() {
    let {avatarUrl, nickname = '点击登陆', onClickNickname} = this.props;
    return (<View className={styles.component}>
      <View className={styles.userInfo} onClick={onClickNickname}>
        <Image className={styles.avatar} mode='scaleToFill' src={avatarUrl} />
        <View className={styles.detailed}>
          <Text className={styles.nickname}>{nickname}</Text>
          <Text className={styles.remark}>这家伙很懒，什么也没留下</Text>
        </View>
      </View>
      <View className={styles.userTab}>
        <Navigator className={styles.tabItem} url={'/pages/collection/index?current=0'}>
          <Text>99</Text>
          <Text className={styles.title}>收藏</Text>
        </Navigator>
        <Navigator className={styles.tabItem} url={'/pages/collection/index?current=1'}>
          <Text>12</Text>
          <Text className={styles.title}>发布</Text>
        </Navigator>
        <Navigator className={styles.tabItem} url={'/pages/messages/index'}>
          <Text>0</Text>
          <Text className={styles.title}>点赞</Text>
        </Navigator>
      </View>
    </View>);
  }
}

export default Index;
