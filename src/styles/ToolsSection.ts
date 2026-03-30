import { styled } from '../styles/stitches.config'

export const ToolsSection = styled('section', {
  scrollbarWidth: 'none',
  scrollbarColor: '$gray2 $primary',
  width: '$viewportWidth',
  maxWidth: '$viewportMaxWidth',
  height: '$viewportHeight',
  maxHeight: '$viewportHeight',
  border: '1px solid $light',
  borderRadius: '$roundness',
  boxShadow: '$card',

  '@mobile': {
    padding: '0 2em 0',
    width: '100dvw',
    height: '100dvh',
    maxHeight: '100dvh',
    border: 'none',
    fontSize: '14pt',
  },
})
