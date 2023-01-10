import {useDidShow, useShareAppMessage, useShareTimeline} from '@tarojs/taro';
import {Pages} from '@hocgin/taro-ui';
import React from "react";
import {LangKit} from "@hocgin/taro-kit";
import {View} from '@tarojs/components';

export default () => {
  useShareAppMessage(LangKit.createShare);
  useShareTimeline(LangKit.createShare);
  return (<Pages.IndexPage.IndexScroll renderItem={(v) => <View>{v}</View>}
                                       scroll={async (...args) => {
                                         console.log('搜索', args)
                                         return [
                                           1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                                           1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                                           1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                                           1, 2, 3, 4, 5, 6, 7, 8, 9, 11
                                         ];
                                       }}/>);
}
