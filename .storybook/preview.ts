import type { Decorator, Preview } from '@storybook/react'
import React, { useEffect, useState } from 'react'

import { globalStyles } from '../src/shared/styles/globalStyles'
import { getCssText } from '../src/shared/styles/stitches.config'

globalStyles()

function StyleInjector() {
  const [css, setCss] = useState('')

  useEffect(() => {
    setCss(getCssText())
  }, [])

  if (!css) return null

  return React.createElement('style', {
    dangerouslySetInnerHTML: { __html: css },
  })
}

const withTheme: Decorator = (Story) =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement(StyleInjector),
    React.createElement(
      'div',
      {
        style: {
          background: '#1c1f20',
          minHeight: '100vh',
          fontFamily: '"Roboto", sans-serif',
          color: '#fff',
        },
      },
      React.createElement(Story),
    ),
  )

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1c1f20' }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withTheme],
}

export default preview
