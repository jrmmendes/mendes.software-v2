import { styled } from '../styles/stitches.config'

export const Heading = styled('h1', {
  fontFamily: '$sans',
  margin: 0,
  variants: {
    level: {
      1: { fontSize: '$xxl', fontWeight: 500 },
      2: { fontSize: '$xl', fontWeight: 400 },
      3: { fontSize: '$sm', fontWeight: 400 },
    },
    color: {
      light: { color: '$light' },
      gray2: { color: '$gray2' },
    },
    marginTop: {
      sm: { marginTop: '$xs' },
      md: { marginTop: '$md' },
      lg: { marginTop: '$lg' },
    },
  },
  defaultVariants: {
    level: '1',
    color: 'light',
  },
})
