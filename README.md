# taro-starter

> - 这是一份基于 3.x 的 Taro 模版, 如果有需要可以点击`Use this Template`进行使用。
> - [Taro 官方文档](https://taro-docs.jd.com/taro/docs/README)

## 基础架构

- DvaJS
- Taro
- Taro UI
- Less

## 目录结构

```shell
.
├── README.md
├── babel.config.js
├── config                 # 配置
│    ├── index.js          # 通用环境
│    ├── dev.js            # 开发环境
│    └── prod.js           # 生产环境
├── dist                   # 编译文件生存目录
├── docs                   # 文档
├── jsconfig.json          
├── mock                   # mock 数据
├── package.json           
├── project.config.json    # 项目配置
├── scripts                
├── src                    
│    ├── assets            # 图片
│    ├── components        # 组件
│    │     ├── common      # 通用
│    │     └── ..
│    ├── layouts           # ..
│    ├── models            # dva model
│    │     ├── apps.js     # .. 
│    │     ├── index.js    # Model 加载入口
│    ├── pages             # 页面
│    │     ├── common      # 通用
│    │     └── ..
│    ├── services          # 接口
│    ├── utils             # 通用工具函数
│    │     ├── request.js  # [Basic] 请求封装
│    │     ├── dva.js      # [Basic] Dva 封装
│    │     ├── events.js   # Taro 事件
│    │     ├── global.js   # 全局变量
│    │     ├── pages.js    # 页面跳转管理
│    │     ├── storage.js  # 本地存储
│    │     └── utils.js    # 通用
│    ├── app.config.js     # 应用配置
│    ├── app.js            # 应用入口
│    ├── app.less          # 全局样式
│    ├── config.js         # 项目配置变量
│    ├── index.html        # html 模版文件
│    ├── mixin.less        # 通用样式
│    ├── theme.global.scss # 自定义样式主题
│    └── theme.less        # 全局样式主题
└── webpack.config.js
```
