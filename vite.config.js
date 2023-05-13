import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  test: {
    globals: false,
    environment: 'jsdom',
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/main.jsx'),
      name: 'web-core',
      fileName: (format) => `web-core.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-gsap',
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material',
        '@mui/lab',
        '@mui/material',
        '@mui/styles',
        'gsap',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
          'react-gsap': 'react-gsap',
          '@emotion/react': '@emotion/react',
          '@emotion/styled': '@emotion/styled',
          '@mui/icons-material': '@mui/icons-material',
          '@mui/lab': '@mui/lab',
          '@mui/material': '@mui/material',
          '@mui/styles': '@mui/styles',
          'gsap': 'gsap'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@mlambda-net/web-core': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()],
});
