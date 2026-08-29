import { defineConfig } from 'oxlint'
import config from 'oxlint-config-alexandernanberg/oxlint/react'

export default defineConfig({
  extends: [config],
  ignorePatterns: ['.output', '.nitro', '.tanstack', 'app/routeTree.gen.ts'],
})
