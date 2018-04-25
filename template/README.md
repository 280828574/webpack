# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

{{#prerender}}
# 预渲染需要配置的文件位置

> [/config/index.js](./config/index.js) prerender>proxyTable>target 预渲染时需要配置接口服务器

> [/build/prerender.routes.js](./build/prerender.routes.js)  预渲染路由规则

> [/src/api/axios.js](./src/api/axios.js) axios.defaults.baseURL 生成路由时需要配置接口服务器地址
{{/prerender}}
