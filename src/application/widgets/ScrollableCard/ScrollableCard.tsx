import { styled } from '@/infra/styles/stitches.config'
import { Card } from '@/application/components/Card/Card'

export const ScrollableCard = styled(Card, {
  hiddenScrollbar: true,
  overflowY: 'scroll',
  padding: '$xl $xxl $xl',
  fontSize: '12pt',

  '@mobile': {
    padding: '$xl $xl 0',
    fontSize: '14pt',
  },
})
