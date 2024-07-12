import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // dirs: ['src/@core/components'],
      dts: true,
      resolvers: [
        PrimeVueResolver()
      ]
    }),
    AutoImport({
      imports: [
        'vue', 
        'vue-router', 
        // '@vueuse/core', 
        // '@vueuse/math', 
        // 'pinia'
      ],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@core': fileURLToPath(new URL('./src/@core', import.meta.url)),

      // '@themeConfig': fileURLToPath(new URL('./themeConfig.ts', import.meta.url)),
      // '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
      // '@images': fileURLToPath(new URL('./src/assets/images/', import.meta.url)),
      // '@styles': fileURLToPath(new URL('./src/styles/', import.meta.url)),
      // '@configured-variables': fileURLToPath(new URL('./src/styles/variables/_template.scss', import.meta.url)),
      // '@axios': fileURLToPath(new URL('./src/plugins/axios', import.meta.url)),
      // '@validators': fileURLToPath(new URL('./src/@core/utils/validators', import.meta.url)),
      // 'apexcharts': fileURLToPath(new URL('node_modules/apexcharts-clevision', import.meta.url)),
    },
  },
})
