import {useDidShow} from '@tarojs/taro';
import {PageContainer, SearchBar} from '@hocgin/taro-ui';
import React from "react";

const Index: React.FC<{}> = ({}) => {
  useDidShow(() => {
    // 初始化请求
  });

  return (<PageContainer title='测试页面'>
    <SearchBar/>
    {/*<ColorTitle>..测试</ColorTitle>*/}
  </PageContainer>);
};

export default Index;
