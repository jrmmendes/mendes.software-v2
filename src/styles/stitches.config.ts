import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#1c1f20',
      light: '#fff',
      gray2: '#bbb',
    },
    space: {
      roundness: '0.45rem',
    },
    fonts: {
      sans: '"Roboto", sans-serif',
    },
    fontSizes: {
      base: '15pt',
    },
    shadows: {
      card: '0 0 75px rgba(0, 0, 0, 0.5)',
    },
    sizes: {
      viewportWidth: '90dvw',
      viewportMaxWidth: '1200px',
      viewportHeight: '80dvh',
    },
  },
  media: {
    mobile: '(max-width: 800px)',
  },
  utils: {
    centeredFlex: () => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  },
})
