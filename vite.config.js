import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //配置代理 解决跨域问题(ajax请求失败) 把/api前面的路径替换为http://localhost:8080,实际路径变成http://localhost:8080/api/,再把/api变成空''
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:8080',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/,'')
      }
    }
  }
})
