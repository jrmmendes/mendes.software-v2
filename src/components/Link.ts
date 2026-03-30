import { styled } from '../styles/stitches.config'

export const Link = styled('a', {
  resetLink: true,
  textDecoration: 'none',
  fontSizeTransition: true,
  cursor: 'pointer',

  variants: {
    variant: {
      default: {},
      hoverable: {
        '&:hover': {
          fontSize: '$lg',
        },
      },
      detail: {
        color: '$light',
        '&:active, &:visited': {
          color: '$light',
        },
        '&:hover': {
          color: '$gray2',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
