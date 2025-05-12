// docs/.vitepress/config.mts
import AutoSidebar from "file:///D:/BaiduSyncdisk/yubinbin.github.io/node_modules/vite-plugin-vitepress-auto-sidebar/dist/index.mjs";
var config_default = {
  title: "\u7B14\u8BB0",
  description: "\u7B14\u8BB0",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "\u9996\u9875", link: "/" }
      // { text: 'Examples', link: '/markdown-examples' }
    ],
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
      port: 7653
    },
    plugins: [
      AutoSidebar({
        // path: '/docs',
        collapsed: true,
        ignoreList: [".obsidian", ".git", "node_modules"]
      })
    ]
  }
};
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxCYWlkdVN5bmNkaXNrXFxcXHl1YmluYmluLmdpdGh1Yi5pb1xcXFx2aXRlUHJlc3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxCYWlkdVN5bmNkaXNrXFxcXHl1YmluYmluLmdpdGh1Yi5pb1xcXFx2aXRlUHJlc3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0JhaWR1U3luY2Rpc2sveXViaW5iaW4uZ2l0aHViLmlvL3ZpdGVQcmVzcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCBBdXRvU2lkZWJhciBmcm9tICd2aXRlLXBsdWdpbi12aXRlcHJlc3MtYXV0by1zaWRlYmFyJ1xuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogXCJcdTdCMTRcdThCQjBcIixcbiAgZGVzY3JpcHRpb246IFwiXHU3QjE0XHU4QkIwXCIsXG4gIGlnbm9yZURlYWRMaW5rczogdHJ1ZSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnLycgfSxcbiAgICAgIC8vIHsgdGV4dDogJ0V4YW1wbGVzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfVxuICAgIF0sXG5cbiAgIC8qICBzaWRlYmFyOiBbXG4gICAgICB7IHRleHQ6ICdNYXJrZG93biBFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH0sXG4gICAgICB7IHRleHQ6ICdSdW50aW1lIEFQSSBFeGFtcGxlcycsIGxpbms6ICcvYXBpLWV4YW1wbGVzJyB9LFxuICAgICAgeyB0ZXh0OiAnTWFya2Rvd24gRXhhbXBsZXMnLCBsaW5rOiAnL21hcmtkb3duLWV4YW1wbGVzJyB9LFxuICAgICAgeyB0ZXh0OiAnUnVudGltZSBBUEkgRXhhbXBsZXMnLCBsaW5rOiAnL2FwaS1leGFtcGxlcycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ01hcmtkb3duIEV4YW1wbGVzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSdW50aW1lIEFQSSBFeGFtcGxlcycsIGxpbms6ICcvYXBpLWV4YW1wbGVzJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLCAqL1xuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIC8vIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzJyB9XG4gICAgXVxuICB9LFxuICB2aXRlOiB7XG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiA3NjUzLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgQXV0b1NpZGViYXIoe1xuICAgICAgICAvLyBwYXRoOiAnL2RvY3MnLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGlnbm9yZUxpc3Q6IFsnLm9ic2lkaWFuJywgJy5naXQnLCAnbm9kZV9tb2R1bGVzJ11cbiAgICAgIH0pXG4gICAgXVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxpQkFBaUI7QUFFeEIsSUFBTyxpQkFBUTtBQUFBLEVBQ2IsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsaUJBQWlCO0FBQUEsRUFDakIsYUFBYTtBQUFBO0FBQUEsSUFFWCxLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxJQUFJO0FBQUE7QUFBQSxJQUUxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWlCQSxhQUFhO0FBQUE7QUFBQSxJQUViO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFlBQVk7QUFBQTtBQUFBLFFBRVYsV0FBVztBQUFBLFFBQ1gsWUFBWSxDQUFDLGFBQWEsUUFBUSxjQUFjO0FBQUEsTUFDbEQsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
