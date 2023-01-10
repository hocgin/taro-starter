# taro-starter

> - 这是一份基于 3.x 的 Taro 模版, 如果有需要可以点击`Use this Template`进行使用。

- [Taro 官方文档](https://taro-docs.jd.com/taro/docs/README)
- [Taro Hooks](https://github.com/innocces/taro-hooks)
- [Vantui](https://github.com/antmjs/vantui)

### 如何使用

1. 安装基础依赖

```shell
yarn 
# or npm install
```

2. 运行项目

```shell
npm run dev:weapp
```

3. 使用`微信开发工具`导入`dist`目录

### 项目说明

<details>
<summary>基础架构</summary>

- Taro
- VantUI
- Less

</details>

<details>
<summary>目录结构</summary>

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
└── webpack.config.ts
```

</details>

### 演示

#### 使用小程序

<img src="http://cdn.hocgin.top/%E5%B0%8F%E7%A8%8B%E5%BA%8F.jpg" width = "100" alt="图片名称" align=center />

#### 部分截图

<img src="http://cdn.hocgin.top/WechatIMG323%20%281%29.jpeg" width = "100" alt="图片名称" align=center />

### 联系作者

<img src="http://cdn.hocgin.top/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png" width = "100" height = "100" alt="图片名称" align=center />

