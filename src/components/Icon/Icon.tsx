import { styled } from '@/styles/stitches.config'

export const Icon = styled('i', {
  variants: {
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      xxl: { fontSize: '$xxl' },
      logo: { fontSize: '$xxxl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
