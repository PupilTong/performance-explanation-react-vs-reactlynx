import { defineConfig } from '@lynx-js/rspeedy'

import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'

export default defineConfig({
  source: {
    entry: './src/reactlynx.jsx'
  },
  output: {
    distPath: {
      root: './dist/lynx',
    },
    filename: 'main.json'
  },
  plugins: [
    pluginReactLynx(),
  ],
  environments: {web:{}}
})
