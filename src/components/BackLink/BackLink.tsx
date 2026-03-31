import { Link as RouterLink } from '@tanstack/react-router'
import { styled } from '@/styles/stitches.config'

export const BackArrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 4 }}>
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const BackLink = styled(RouterLink, {
  display: 'inline-flex',
  alignItems: 'center',
  marginBottom: '$md',
  textDecoration: 'none',
  color: '$light',
  fontSize: '$md',
  resetLink: true,
})
