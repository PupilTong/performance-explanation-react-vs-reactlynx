import { defineConfig } from '@rsbuild/core';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  source: {
    entry: {
      index: './src/main.ts',
    },
  },
  output: {
    target: 'web',
    distPath: {
      root: './dist/web',
    },
    filenameHash: false,
    overrideBrowserslist: [ 'Chrome 134']
  },
  dev: {
    writeToDisk: true,
    hmr: false,
    liveReload: false,
  },
  html: {},
  tools: {
    htmlPlugin: false,
    rspack: {
      output: {
        publicPath: `dist/web/`,
      },
    },
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one'
    },
    removeConsole:true
  }
});
