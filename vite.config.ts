import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs-kr.github.io/guide/static-deploy.html#github-pages
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()]

})
