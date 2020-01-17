<!--
 * @Author: 14138993
 * @Date: 2019-06-16 17:43:54
 * @LastEditTime : 2020-01-17 10:10:29
 * @FilePath: \babel-plugin-transfrom-clear\README.MD
 -->

## babel-plugin-transform-clear
  #### 一个很简单的但实用的babel清除插件：
  为了解决团队开发在build打包过程中，代码内存在未删除的debugger或者alert等将会进行删除操作插件内部对环境环境做了判断，只要production下才会进行删除操作
  ```
    process.env.NODE_ENV === "production"
  ```
### 使用方式
  ```
  // 参数可不传 默认为true 将debugger和alert都删除 传递false 则不处理
  {
  "presets": [],
  "plugins": ["transform-clear"]  // [["transform-clear", {Debugger: false, Alert: false}]]
}
  ```