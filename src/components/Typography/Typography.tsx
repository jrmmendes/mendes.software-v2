import { styled } from '@/styles/stitches.config'

const fontSizes = {
  xs: '$xs',
  sm: '$sm',
  base: '$base',
  md: '$md',
  lg: '$lg',
  xl: '$xl',
  xxl: '$xxl',
} as const

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
} as const

const colors = {
  primary: '$primary',
  light: '$light',
  gray2: '$gray2',
  mailGray: '$mailGray',
} as const

const margins = {
  sm: '$xs',
  md: '$md',
  lg: '$lg',
} as const

export const Typography = styled('span', {
  fontFamily: '$sans',
  margin: 0,
  variants: {
    variant: {
      h1: { fontSize: fontSizes.xxl, fontWeight: fontWeights.medium },
      h2: { fontSize: fontSizes.xl, fontWeight: fontWeights.normal },
      h3: { fontSize: fontSizes.sm, fontWeight: fontWeights.normal },
      body: { fontSize: fontSizes.base, fontWeight: fontWeights.normal },
    },
    color: {
      primary: { color: colors.primary },
      light: { color: colors.light },
      gray2: { color: colors.gray2 },
      mailGray: { color: colors.mailGray },
    },
    weight: {
      light: { fontWeight: fontWeights.light },
      normal: { fontWeight: fontWeights.normal },
      medium: { fontWeight: fontWeights.medium },
    },
    size: {
      xs: { fontSize: fontSizes.xs },
      sm: { fontSize: fontSizes.sm },
      base: { fontSize: fontSizes.base },
      md: { fontSize: fontSizes.md },
      lg: { fontSize: fontSizes.lg },
      xl: { fontSize: fontSizes.xl },
      xxl: { fontSize: fontSizes.xxl },
    },
    italic: {
      true: { fontStyle: 'italic' },
    },
    marginTop: {
      sm: { marginTop: margins.sm },
      md: { marginTop: margins.md },
      lg: { marginTop: margins.lg },
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'light',
  },
})
