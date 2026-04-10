import { styled } from '@/shared/styles/stitches.config'

export const Box = styled('div', {
  boxSizing: 'border-box',
  variants: {
    width: {
      full: { width: '$fullVw' },
      card: { width: '$cardWidth', maxWidth: '$cardMaxWidth' },
    },
    height: {
      full: { height: '$fullVh' },
      card: { height: '$cardHeight', maxHeight: '$cardHeight' },
    },
  },
  defaultVariants: {
    width: undefined,
    height: undefined,
  },
})