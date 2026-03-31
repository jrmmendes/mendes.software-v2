import { createElement, forwardRef } from 'react'
import { Link as RouterLink } from '@tanstack/react-router'
import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import type { VariantProps } from '@stitches/react'
import { styled } from '@/infra/styles/stitches.config'

const linkStyles = {
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
} as const

const AnchorLink = styled('a', linkStyles)
const InternalRouterLink = styled(RouterLink, linkStyles)

type AnchorLinkProps = ComponentPropsWithoutRef<'a'> &
  VariantProps<typeof AnchorLink> & {
    href: string
    to?: never
  }

type InternalRouterLinkProps = ComponentPropsWithoutRef<typeof RouterLink> &
  VariantProps<typeof InternalRouterLink> & {
    href?: never
  }

export type LinkProps = AnchorLinkProps | InternalRouterLinkProps

export const Link = forwardRef<ElementRef<'a'>, LinkProps>((props, ref) => {
  if ('href' in props && props.href != null) {
    const { href, ...rest } = props as AnchorLinkProps
    return createElement(AnchorLink, { ...(rest as Omit<AnchorLinkProps, 'href'>), ref, href })
  }

  return createElement(InternalRouterLink, props as InternalRouterLinkProps)
})

Link.displayName = 'Link'
