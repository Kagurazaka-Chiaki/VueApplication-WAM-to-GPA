module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        "appId": "com.example.app",
        "productName": "Calculate", // 生成的安装文件名
        "copyright": "Copyright © 2020", // 版权信息
        "directories": {
          "output": "./dist_electron"// 输出文件路径
        },
        "nsis": {
          "oneClick": false, // 是否一键安装
          "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          "allowToChangeInstallationDirectory": true, // 允许修改安装目录
          "installerIcon": "build/icons/electron.ico", // 安装图标
          "uninstallerIcon": "build/icons/electron.ico", //卸载图标
          "installerHeaderIcon": "build/icons/electron.ico", // 安装时头部图标
          "createDesktopShortcut": true, // 创建桌面图标
          "createStartMenuShortcut": true, // 创建开始菜单图标
          "shortcutName": "Calculate GPA", // 图标名称
        },
        "win": { // win相关配置
          "icon": "build/icons/icon.ico", // 图标
          "target": [
            {
              "target": "nsis", // 利用nsis制作安装程序
              "arch": [
                "x64", // 64位
                "ia32" // 32位
              ]
            }
          ]
        }
      }
    }

  }
}
