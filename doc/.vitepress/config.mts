// import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
// https://vitepress.dev/reference/site-config
import fs from 'fs'; // Node.js 文件系统模块
import path from 'path'; // Node.js 路径模块

function sortByFileName(a, b) {
  return path.basename(a).localeCompare(path.basename(b));
}

export default {
  title: "笔记",
  description: "笔记",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },

    /*  sidebar: [
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' },
      { text: 'Markdown Examples', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' },
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ], */

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    server: {
      port: 7653,
    },
    plugins: [
      AutoSidebar({
        // path: '/docs',
        sortFn: sortByFileName,
        collapsed: true,
        ignoreList: ['.obsidian', '.git', 'node_modules'],
        // sideBarResolved(SidebarMulti){
        //   // console.log("sideBarResolved===>",JSON.stringify(SidebarMulti))
        // },
        // sideBarItemsResolved(data){
        // },
        beforeCreateSideBarItems(data){

          /*  function getOrder(item){
            let res = item.match(/(?<order>\d+)/);
            if (res) {
              return parseInt(res.groups.order);
            }
            return 0;
          }

          data.sort((a, b) => {
            return getOrder(a) - getOrder(b);
          }); */
          // 文件夹在前，文件在后
          let foldersData = [];
          let filesData = [];
          for (let i = 0 ; i <data.length ; i++){ 
            let item = data[i];
            if (item && item.split('.').length == 1) {
              foldersData.push(item);
            } else {
              filesData.push(item);
            }
          };

          data = foldersData.concat(filesData);
          // console.log("beforeCreateSideBarItems===>",data)
          return data;
        }
      })
    ]
  }
}
