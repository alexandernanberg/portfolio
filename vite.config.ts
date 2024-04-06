/* eslint-disable import/no-extraneous-dependencies */

import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

installGlobals()

export default defineConfig({
  plugins: [remix(), tailwindcss(), tsconfigPaths()],
})