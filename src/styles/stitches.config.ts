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
      mailGray: '#a8a8a8',
    },
    radii: {
      roundness: '0.45rem',
    },
    fontSizes: {
      xs: '0.8em',
      sm: '0.9em',
      base: '15pt',
      md: '1em',
      lg: '1.1em',
      xl: '1.5em',
      xxl: '2em',
      xxxl: '9em',
    },
    space: {
      xxs: '0.2em',
      xs: '0.3em',
      sm: '0.5em',
      md: '1em',
      lg: '1.5em',
      xl: '2em',
      xxl: '4em',
    },
    fonts: {
      sans: '"Roboto", sans-serif',
    },
    shadows: {
      card: '0 0 75px rgba(0, 0, 0, 0.5)',
    },
    sizes: {
      cardWidth: '90dvw',
      cardMaxWidth: '1200px',
      cardHeight: '80dvh',
      fullVw: '100dvw',
      fullVh: '100dvh',
    },
    zIndices: {
      ribbon: 10,
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
    resetLink: () => ({
      color: 'inherit',
      '&:hover, &:active, &:visited': {
        color: 'inherit',
      },
    }),
    fontSizeTransition: () => ({
      transition: 'font-size 180ms ease-in-out',
    }),
    hiddenScrollbar: () => ({
      scrollbarWidth: 'none',
      scrollbarColor: '$gray2 $primary',
    }),
  },
})
