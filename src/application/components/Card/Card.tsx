import { styled } from '@/infra/styles/stitches.config'

export const Card = styled('section', {
  width: '$cardWidth',
  maxWidth: '$cardMaxWidth',
  height: '$cardHeight',
  maxHeight: '$cardHeight',
  border: '1px solid $light',
  borderRadius: '$roundness',
  boxShadow: '$card',
  boxSizing: 'border-box',

  '@mobile': {
    width: '$fullVw',
    height: '$fullVh',
    maxHeight: '$fullVh',
    border: 'none',
  },
})
