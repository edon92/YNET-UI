# YNET-UI 目录说明
```js
.
├── build // webpack配置
├── config // webpack配置
├── dist // examples 生产环境打包
│   └── static
│       ├── css
│       ├── fonts
│       └── js
├── examples // 案例演示目录
│   ├── assets
│   │   ├── font
│   │   └── less
│   ├── components
│   └── docs
├── lib // 最终上传npm的库
│   ├── fonts
│   └── theme
├── src // 组件源码
│   ├── components
│   │   ├── aside // aside组件js部分
│   │   │   └── style // aside组件css部分
│   │   ├── button
│   │   │   └── style
│   │   ├── container
│   │   │   └── style
│   │   ├── footer
│   │   │   └── style
│   │   ├── header
│   │   │   └── style
│   │   ├── icon
│   │   │   └── style
│   │   │       └── font
│   │   ├── input
│   │   │   └── style
│   │   ├── main
│   │   │   └── style
│   │   └── radio
│   │       └── style
│   ├── index.js // 所有组件入口
│   ├── mixins // 工具函数
│   └── style // scss公共模块
│       ├── common
│       └── mixins
├── static
├── components.json // 组件隐射json文件，webpack打包用
└── test // 单元测试文件
    ├── e2e
    │   ├── custom-assertions
    │   └── specs
    └── unit
        ├── coverage
        │   └── lcov-report
        └── specs
```
# Getting started

```js

# 下载本地
git clone https://github.com/edon92/YNET-UI.git

# 打包组件库
npm run build

# 在线查看文档
npm run dev

```


