/*
 * @Author: 14138993
 * @Date: 2019-06-16 17:23:43
 * @LastEditTime : 2020-01-16 18:48:58
 * @Description: build clear debugger and alert
 * @FilePath: \babel-plugin-transform-clear\lib\index.js
 */
module.exports = function (babel) {
  if (process.env.NODE_ENV === "production") {
    return {
      name: "transform-clear",
      visitor: {
        DebuggerStatement(path) {
          path.remove()
        },
        Identifier(path) {
          if (path.isIdentifier({ name: "alert" })) {
            path.parentPath.remove()
          }
        }
      }
    }
  } else {
    return {}
  }
}