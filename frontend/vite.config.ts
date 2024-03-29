import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true
    },
    hmr: {
      clientPort: 3000,
      overlay: false
    }
  },
  define: {
    global: 'window',
  },
})
