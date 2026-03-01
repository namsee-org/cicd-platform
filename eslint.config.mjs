// eslint.config.mjs
// @ts-check
import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
  // ESLint recommended (JS)
  eslint.configs.recommended,
  // TypeScript-ESLint recommended
  ...tseslint.configs.recommended,
)
