安装编译环境:

visual studio installer中安装

或者

```
yarn global add --production windows-build-tools 
或
npm install --global --production windows-build-tools
```

安装gyp命令 npm install -g node-gyp ；

安装Python 2.7（v3.x.x不支持），安装后要配置环境变量。

成功后执行npm config set python python2.7

执行 npm config set msvs_version 2017