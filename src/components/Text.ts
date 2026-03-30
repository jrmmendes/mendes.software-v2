import { styled } from '../styles/stitches.config'

export const Text = styled('p', {
  fontFamily: '$sans',
  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      base: { fontSize: '$base' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      xxl: { fontSize: '$xxl' },
    },
    weight: {
      light: { fontWeight: 300 },
      normal: { fontWeight: 400 },
      medium: { fontWeight: 500 },
    },
    italic: {
      true: { fontStyle: 'italic' },
    },
    color: {
      primary: { color: '$primary' },
      light: { color: '$light' },
      gray2: { color: '$gray2' },
      mailGray: { color: '$mailGray' },
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'light',
  },
})
