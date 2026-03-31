import { styled } from '@/styles/stitches.config'

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
    align: {
      center: { alignItems: 'center' },
      start: { alignItems: 'flex-start' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
    },
    justify: {
      center: { justifyContent: 'center' },
      start: { justifyContent: 'flex-start' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
    },
    gap: {
      xxs: { gap: '$xxs' },
      xs: { gap: '$xs' },
      sm: { gap: '$sm' },
      md: { gap: '$md' },
      lg: { gap: '$lg' },
      xl: { gap: '$xl' },
    },
    wrap: {
      true: { flexWrap: 'wrap' },
    },
    inline: {
      true: { display: 'inline-flex' },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: undefined,
    justify: undefined,
    gap: undefined,
    wrap: undefined,
    inline: undefined,
  },
})
