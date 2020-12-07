import React, {Component} from 'react'
import {Provider} from 'react-redux';
import dva from '@/utils/dva';
import models from '@/models'

import 'taro-ui/dist/style/index.scss'
import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
})

const store = dvaApp.getStore();

class App extends Component {

  componentDidMount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  componentDidCatchError() {
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return (<Provider store={store}>
      {this.props.children}
    </Provider>);
  }
}

export default App
