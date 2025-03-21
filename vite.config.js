import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-ked",
    project: "javascript-react",
    base: "/D3vGusain/3dAppleIPhone15proWeb/"
  })],

  build: {
    sourcemap: true
  }
})
