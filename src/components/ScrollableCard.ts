import { styled } from '../styles/stitches.config'
import { Card } from './Card'

export const ScrollableCard = styled(Card, {
  hiddenScrollbar: true,
  overflowY: 'scroll',
  padding: '$xl $xxl $xl',
  fontSize: '12pt',

  '@mobile': {
    padding: '0 $xl 0',
    fontSize: '14pt',
  },
})
