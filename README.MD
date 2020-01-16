
## babel-plugin-transform-clear
  #### 一个很简单的但实用的babel清除插件：
  为了解决团队开发在build打包过程中，代码内存在未删除的debugger或者alert等将会进行删除操作插件内部对环境环境做了判断，只要production下才会进行删除操作
  ```
    process.env.NODE_ENV === "production"
  ```
### 使用方式
  ```
  {
  "presets": [],
  "plugins": ["transform-clear"]
}
  ```