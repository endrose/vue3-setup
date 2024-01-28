import { defineConfig } from 'vite'
// install node types before calling below import
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import AutoImport from '../lagi-typescript/node_modules/unplugin-auto-import/dist/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // Targets file extensions
      include: [
        /\.[tj]sx?$/, /\.vue$/,//regex which says t or j followed by sx.// tsx, jsx, ? next to x says it can happen zero or one time js,ts
      ],
      // globals (libraries)
      imports: [
        "vue", "vue-router", "pinia"],
      // other settings/files/dirs to import
      dts: true,//autoimport all the file that ends with d.ts
      // autoimport inside vue tempplate
      vueTemplate: true,
      eslintrc: { enabled: true }
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      // two method avail
      "@": fileURLToPath(new URL('./src', import.meta.url)),

      // method 2 using path
      "@components": path.resolve(__dirname, "src/components"),
      "@Pages": path.resolve(__dirname, "src/@Pages")
    }
  },
  server: {
    port: 3000
  }
})
