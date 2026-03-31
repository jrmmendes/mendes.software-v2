import type { StorybookConfig } from '@storybook/react-vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const config: StorybookConfig = {
  stories: [
    '../.storybook/docs/**/*.mdx',
    '../src/components/**/*.stories.@(ts|tsx)',
    '../src/widgets/**/*.stories.@(ts|tsx)',
    '../src/pages/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {}
    const srcDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src')

    const existingAliases = config.resolve.alias
    const normalizedAliases = Array.isArray(existingAliases)
      ? existingAliases
      : existingAliases
        ? Object.entries(existingAliases).map(([find, replacement]) => ({ find, replacement }))
        : []

    config.resolve.alias = [
      ...normalizedAliases,
      {
        find: /^@\//,
        replacement: `${srcDir}/`,
      },
    ]

    return config
  },
}

export default config
