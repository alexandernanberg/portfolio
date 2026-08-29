import { defineConfig } from 'oxfmt'
import config from 'oxlint-config-alexandernanberg/oxfmt/base'

export default defineConfig({
  ...config,
  ignorePatterns: ['app/routeTree.gen.ts', 'pnpm-lock.yaml'],
})
