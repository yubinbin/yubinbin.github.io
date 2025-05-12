# 常用命令

```
nvm install 4.2.2
nvm ls available
nvm use 4.2.2
```

# 在多环境中，npm该如何使用呢？

每个版本的 Node 都会自带一个不同版本的 npm，可以用 npm -v 来查看 npm 的版本。
**全局安装的 npm 包并不会在不同的 Node 环境中共享**，因为这会引起兼容问题。它们被放在了不同版本的目录下，
例如 ~/.nvm/versions/node/<version>/lib/node_modules</version> 这样的目录。这刚好也省去我们在 Linux 中使用 sudo 的功夫了。因为这是用户的主文件夹，并不会引起权限问题。

**但问题来了，我们安装过的 npm 包，都要重新再装一次？**

在终端输入
```js
npm config set prefix "D:\Program Files\nvm\node_global"，
// 其中D:\nvm\node_global为你的node_global文件夹路径。

// D:\nvm\node_cache 为你的缓存路径 。
npm config set cache "D:\Program Files\nvm\node_cache"
```

**然后就可以使用了，之后每次切换node版本都要设置一下**
