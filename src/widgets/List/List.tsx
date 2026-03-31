import { styled } from '@/styles/stitches.config'

export const List = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,

  variants: {
    inline: {
      true: {
        centeredFlex: true,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    },
    details: {
      true: {
        paddingLeft: '$lg',
      },
    },
  },
  defaultVariants: {
    inline: undefined,
    details: undefined,
  },
})

export const ListItem = styled('li', {
  variants: {
    spacing: {
      link: {
        margin: '$xxs $sm',
        height: '1.5rem',
      },
      detail: {
        margin: '$sm 0',
        fontSize: '$md',
      },
    },
  },
  defaultVariants: {
    spacing: undefined,
  },
})
