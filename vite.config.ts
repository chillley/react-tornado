import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginForArco from '@arco-plugins/vite-react'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            {find: "@", replacement: "/src"},
        ],
    },
    plugins: [react(),vitePluginForArco()],
    server: {
        host: true,
        port: 8082,
        proxy: {}
    }
})
