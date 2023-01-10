import {CustomTabBar} from '@hocgin/taro-ui'
import config from '@/app.config'
import './index.global.less';

export default () => {
  return <CustomTabBar tabBar={(config as any)?.tabBar}/>
};
