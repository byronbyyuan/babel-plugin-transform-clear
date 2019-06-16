/*
 * @Author: 14138993
 * @Date: 2019-06-16 17:23:43
 * @LastEditTime : 2020-01-16 17:41:49
 * @Description: build clear debugger and alert
 * @FilePath: \babel-plugin-transfrom-clear\lib\index.js
 */
module.exports = function (babel) {
  const { types: t } = babel
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