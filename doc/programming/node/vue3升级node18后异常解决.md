1. error @achrinza/node-ipc@9.2.2: The engine "node" is incompatible with this module. Expected version "8 || 10 || 12 || 14 || 16 || 17". Got "18.19.1"

执行yarn install包安装时，老是出现下面错误：
error @achrinza/node-ipc@9.2.2: The engine “node” is incompatible with this module. Expected version

原因
下载的vue项目不支持18版本的node,需要降级到8 || 10 || 12 || 14 || 16 || 17其中的一个版本

查资料都要卸载当前18版本，然后重新安装一个可支持的版本去覆盖，或者重新安装一个版本，使用nvm去切换当前项目的运行版本。
但很麻烦，不想去改变自己的node版本。

可以执行

# 兼容命令
yarn config set ignore-engines true 
1
2
再次执行yarn install,执行成功！


2. Error: error:0308010C:digital envelope routines::unsupported

解决方案: 
方案1：打开IDEA 终端，直接输入

Linux & Mac OS：

export NODE_OPTIONS=--openssl-legacy-provider
Windows：

set NODE_OPTIONS=--openssl-legacy-provider
方案2：打开IDEA 终端，直接输入（问题解决）
$env:NODE_OPTIONS="--openssl-legacy-provider"

 方案3:卸载当前版本，安装合适的版本(node.js)

方案4:

解决方式（仅限 windows）:

在项目中 package.json 的 scripts 中新增 SET NODE_OPTIONS=--openssl-legacy-provider

添加前：

"scripts": {
"dev": "vue-cli-service serve",
 
"build:prod": "vue-cli-service build"
 
},
添加后:

"scripts": {
"dev": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
 
"build:prod": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build"
 
},
笔者本人是采用第四种方案解决的，大家可以试试，希望可以帮到大家。

